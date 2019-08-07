import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCharDto {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly class: string;

  @ApiModelProperty()
  readonly stats: number;
}
