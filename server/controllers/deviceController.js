const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');
const apiError = require('../error/apiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.png';
            await img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    DeviceInfo.create({
                        deviceId: device.id,
                        title: i.title,
                        description: i.description
                    })
                )
            }

            return res.json(device);
        } catch (e) {
            next(apiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page *limit - limit;
        let device;
        if (!brandId && !typeId){
            device = await Device.findAndCountAll({limit, offset});
        }
        if (brandId && !typeId){
            device = await Device.findAndCountAll({where:{brandId}, limit, offset});
        }
        if (!brandId && typeId){
            device = await Device.findAndCountAll({where:{typeId}, limit, offset});
        }
        if (brandId && typeId){
            device = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset});
        }
        return res.json(device);
    }
    async getOne(req, res) {
        const {id} = req.params;
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        );
        return res.json(device);
    }
}

module.exports = new DeviceController;