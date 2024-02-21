import mongoose, { Document } from 'mongoose';

export interface IAttendanceRecord extends Document {
  netID: string;
  uin: string;
  classId: string;
  takenBy: string;
  shortcode: string;
  date: Date;
}

const AttendanceRecordSchema = new mongoose.Schema({
  netID: { type: String, required: true },
  uin: { type: String, required: true },
  classId: { type: String, required: true },
  takenBy: { type: String, required: true },
  shortcode: { type: String, required: true },
  date: { type: Date, required: true }
});

const AttendanceRecord = mongoose.model<IAttendanceRecord>('AttendanceRecord', AttendanceRecordSchema);

export default AttendanceRecord;
