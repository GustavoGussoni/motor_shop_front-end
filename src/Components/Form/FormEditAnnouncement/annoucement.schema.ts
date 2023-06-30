import { AnnouncementSchema } from "../../FormRegisterAnnouncement/annoucement.schema";
import * as z from "zod";

export const EditAnnouncementSchema = AnnouncementSchema.extend({
  is_activate: z.boolean(),
}).partial();
