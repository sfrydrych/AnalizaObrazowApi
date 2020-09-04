import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
        .setTitle('Analiza API')
        .setLicense('MIT License', 'https://opensource.org/licenses/MIT')
        .setContactEmail('slawomir.frydrych@student.up.krakow.pl')
        .setDescription('API Documentation')
        .setVersion('1.1')
        .setSchemes("https", "http")
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('documentation', app, document);
}
