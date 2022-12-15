import { IsNotEmpty, IsUUID } from "class-validator";
import { Length } from "class-validator/types/decorator/decorators";

export class CreateNotificationBody{
    
    @IsNotEmpty() //não pode estar vazio
    @IsUUID()
    recipientId: string;
    
    @IsNotEmpty()
    @Length(5, 300)
    content: string;
    
    category: string;
}