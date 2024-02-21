import { Request, Response } from 'express';
import AttendanceRecord from '../models/AttendanceRecord';

export const getAllRecords = async (req: Request, res: Response) => {
  try {
    const records = await AttendanceRecord.find();
    res.json(records);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addRecord = async (req: Request, res: Response) => {
  try {
    const newRecord = new AttendanceRecord(req.body);
    await newRecord.save();
    console.log("New record added: ", newRecord);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).send(error);
  }
};

/// Delete a record by ID
export const deleteRecord = async (req: Request, res: Response) => {
  const { id } = req.params; // Assuming you're passing the record ID as a URL parameter
  console.log("Deleting record with id: ", id)
  try {
    const result = await AttendanceRecord.findByIdAndDelete(id);
    if (result) {
      res.status(200).send(`Record with id ${id} deleted`);
    } else {
      res.status(404).send('Record not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

/// Search for records by netID or UIN
export const searchRecords = async (req: Request, res: Response) => {
  const { query } = req.params; // Assuming you're passing the search query as a URL parameter
  try {
    const records = await AttendanceRecord.find({
      $or: [
        { netID: query },
        { uin: query }
      ]
    });
    res.json(records);
  } catch (error) {
    res.status(500).send(error);
  }
};