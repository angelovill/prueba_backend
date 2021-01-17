import { ok } from 'assert';
import { request, Request, Response } from 'express';
import Item from '../models/Item';

const index = async (req: Request, res: Response) => {
    const items = await Item.find();

    res.json(items);
}

const create = async (req: Request, res: Response) => {
    const item = new Item(req.body);
    const payload = await item.save();

    res.json({
        status: 'ok',
        payload
    });
}

const softDelete = async (req: Request, res: Response) => {
    const { id } = req.body;
    console.log(id);
    await Item.findByIdAndUpdate({_id: id}, {deleted: true}, {}, (err: Error, item) => {
        if(err) res.status(500).send(err.message);

        if(item){
            res.json({
                status: 'ok',
                item
            });
        }
    });
}

export default {
    index,
    create,
    softDelete
}