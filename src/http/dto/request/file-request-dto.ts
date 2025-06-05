import z from 'zod';

const createFileRequestSchema = z.object({
  name: z.string(),
});

type CreateFileRequestSchema = z.infer<typeof createFileRequestSchema>;

export { CreateFileRequestSchema, createFileRequestSchema };
