-- CreateTable
CREATE TABLE `Stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `heart_beats` INTEGER NOT NULL,
    `spo2` INTEGER NOT NULL,
    `body_temperature` INTEGER NOT NULL,
    `env_temperature` INTEGER NOT NULL,
    `env_humidity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
