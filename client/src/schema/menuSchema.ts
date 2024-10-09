import { z } from "zod";

export const menuSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    description: z.string().nonempty({ message: "Description is required" }),
    price: z.number().min(1, { message: "Price can not be negative or 0" }),
    image: z.instanceof(File).optional().refine((file) => file?.size !== 0, { message: "Image file is required" }),
});
export type MenuFormSchema = z.infer<typeof menuSchema>;