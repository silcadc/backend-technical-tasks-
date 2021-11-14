CREATE TABLE `product` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `reference` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `unit` int DEFAULT NULL,
  `saleprice` decimal(18,4) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;