
-- Customer information
CREATE TABLE IF NOT EXISTS `Customer_information` (
  `user_id` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(60) NOT NULL,
  `password` VARCHAR(45) NULL,
  `full_name` VARCHAR(150) NULL,
  `email` VARCHAR(150) NULL,
  `phone` VARCHAR(15) NULL,
  `address` VARCHAR(200) NULL,
  `level` INT NULL,
  `DoB` VARCHAR(45) NULL,
  `gender` INT NULL,
  PRIMARY KEY (`user_id`))



CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` VARCHAR(45) NOT NULL,
  `user_id` VARCHAR(45) NOT NULL,
  `order_name` INT NULL,
  `total_price` FLOAT NULL,
  `date_time` DATE NULL,
  `status` INT NULL,
  `address` VARCHAR(350) NULL,
  `phone` VARCHAR(45) NULL,
  PRIMARY KEY (`order_id`),
  INDEX `fk_orders_Customer_informationidx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_Customer_information1`
    FOREIGN KEY (`user_id`)
    REFERENCES `Customer_information` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)



CREATE TABLE IF NOT EXISTS `order_details` (
  `order_id` VARCHAR(45) NOT NULL,
  `product_details_id` INT NULL,
  `quantity` INT NULL,
  `price` FLOAT NULL,
  INDEX `fk_orders_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders`
    FOREIGN KEY (`order_id`)
    REFERENCES `orders` (`order_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)




CREATE TABLE IF NOT EXISTS `Cart` (
  `user_id` VARCHAR(45) NOT NULL,
  `product_details_id` INT NOT NULL,
  `quantity` VARCHAR(45) NULL,
  `discount` FLOAT NULL,
  `price` FLOAT NULL,
  INDEX `fk_warehouse_1_idx` (`product_details_id` ASC) VISIBLE,
  INDEX `fk_Cart_Customer_information1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_warehouse_1`
    FOREIGN KEY (`product_details_id`)
    REFERENCES `warehouse` (`product_details_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Cart_Customer_information1`
    FOREIGN KEY (`user_id`)
    REFERENCES `Customer_information` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cart_orders1`
    FOREIGN KEY (`product_details_id`)
    REFERENCES `orders` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB



CREATE TABLE IF NOT EXISTS `Admeliora`.`warehouse` (
  `product_details_id` INT NOT NULL,
  `product_line_id` INT NOT NULL,
  `product_colors_id` INT NOT NULL,
  `sizes_id` INT NOT NULL,
  `quantity` INT NULL,
  INDEX `fk_products_1_idx` (`product_line_id` ASC) VISIBLE,
  INDEX `fk_product_colors_1_idx` (`product_colors_id` ASC) VISIBLE,
  INDEX `fk_sizes_1_idx` (`sizes_id` ASC) VISIBLE,
  PRIMARY KEY (`product_details_id`),
  CONSTRAINT `fk_products_1`
    FOREIGN KEY (`product_line_id`)
    REFERENCES `Admeliora`.`product_lines` (`product_line_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_colors_1`
    FOREIGN KEY (`product_colors_id`)
    REFERENCES `Admeliora`.`product_colors` (`product_colors_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_sizes_1`
    FOREIGN KEY (`sizes_id`)
    REFERENCES `Admeliora`.`sizes` (`sizes_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB




CREATE TABLE IF NOT EXISTS `products_lines` (
  `product_line_id` INT NOT NULL AUTO_INCREMENT,
  `product_line_name` VARCHAR(45) NULL,
  `category_id` INT NOT NULL,
  `materials` VARCHAR(100) NULL,
  `information` VARCHAR(500) NULL,
  `rate` INT NULL,
  PRIMARY KEY (`products_id`),
  INDEX `fk_category_idx` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_category_1`
    FOREIGN KEY (`id`)
    REFERENCES `category` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)






CREATE TABLE IF NOT EXISTS `product_colors` (
  `product_colors_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `color_name` VARCHAR(45) NULL,
  PRIMARY KEY (`product_colors_id`),
  INDEX `fk_products_idx` (`products_id` ASC) VISIBLE,
  CONSTRAINT `fk_products`
    FOREIGN KEY (`products_id`)
    REFERENCES `products` (`products_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)





CREATE TABLE IF NOT EXISTS `category` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))







CREATE TABLE IF NOT EXISTS `sizes` (
  `sizes_id` INT NOT NULL,
  `size_name` VARCHAR(45) NULL,
  `size_info` VARCHAR(300) NULL,
  `price` INT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`sizes_id`),
  INDEX `fk_category_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `category` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)






CREATE TABLE IF NOT EXISTS `product_images` (
  `product_colors_id` INT NOT NULL,
  `image` VARCHAR(45) NULL,
  INDEX `fk_product_images_product_colorsidx` (`product_colors_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_images_product_colors1`
    FOREIGN KEY (`product_colors_id`)
    REFERENCES `product_colors` (`product_colors_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)






CREATE TABLE IF NOT EXISTS `address` (
  `user_id` VARCHAR(45) NOT NULL,
  `province-city` INT NULL,
  `distric` VARCHAR(45) NULL,
  `street` VARCHAR(45) NULL,
  `detail_address` VARCHAR(45) NULL,
  `default` TINYINT NULL,
  INDEX `fk_table1_Customer_information1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_table1_Customer_information1`
    FOREIGN KEY (`user_id`)
    REFERENCES `Admeliora`.`Customer_information` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)


CREATE TABLE IF NOT EXISTS `Admeliora`.`order_details` (
  `order_id` INT NOT NULL,
  `quantity` INT NULL,
  `price` FLOAT NULL,
  `product_details_id` INT NOT NULL,
  INDEX `fk_orders_1_idx` (`order_id` ASC) VISIBLE,
  INDEX `fk_order_details_warehouse1_idx` (`product_details_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_1`
    FOREIGN KEY (`order_id`)
    REFERENCES `Admeliora`.`orders` (`order_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_order_details_warehouse1`
    FOREIGN KEY (`product_details_id`)
    REFERENCES `Admeliora`.`warehouse` (`product_details_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB





SELECT `Users`.`user_id`, `Users`.`user_name`, `Users`.`password`, `Users`.`first_name`, `Users`.`last_name`, `Users`.`email`, `Users`.`phone`, `Users`.`address_id`, `Users`.`level`, `Users`.`dob`, `Users`.`gender`, `PhoneNumbers`.`phoneNumbers` AS `PhoneNumbers.phoneNumbers`, `PhoneNumbers`.`default` AS `PhoneNumbers.default` FROM `users` AS `Users` LEFT OUTER JOIN `phone_numbers` AS `PhoneNumbers` ON `Users`.`user_id` = `PhoneNumbers`.`user_id` GROUP BY `PhoneNumbers`.`user_id`;












