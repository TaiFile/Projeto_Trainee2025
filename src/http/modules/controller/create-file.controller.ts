import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateFileRequestSchema } from 'src/http/dto/request/file-request-dto';

@Controller('/files')
export class CreateFileController {
  constructor(private createFileUseCase: CreateFileUseCase) {}

  @Post()
  @HttpCode(201)
  async handle(
    @Body() { name }: CreateFileRequestSchema,
  ): Promise<CreateFileResponseDTO> {
    const file = await this.createFileUseCase.execute({
      name,
    });

    return {
      file,
    };
  }
}
