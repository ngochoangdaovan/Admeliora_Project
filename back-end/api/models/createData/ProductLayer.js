
 
module.exports = async (db) => {

    const Categories = db.Categories
    const ProductLineModel = db.ProductLines
    // insert categories
    const categories = [
        {
            category_id:2,
            name: "Áo Khoác"
        },
        {
            category_id:1,
            name: "Áo Thun"
        }
    ]

    await Categories.bulkCreate(categories);

    const sizes = [
        {
            size_id : 1,
            size_name: 'M',
            size_info: 'vai: 38 \nNgực: 70   \nEo: 90  \nHông: 92',
            category_id : 2
        },

        {
            size_id : 2,
            size_name: 'L',
            size_info: 'Vai: 45 \nNgực: 80   \nEo: 98  \nHông: 96',
            category_id : 2
        },

        {
            size_id: 3,
            size_name: 'Oversize',
            size_info: 'Vai: 50 \nNgực: 90   \nEo: 110  \nHông: 110',
            category_id : 2
        }
    ]

    await db.Sizes.bulkCreate(sizes)

    const ProductLine = [
        {
            
            product_line_id : 1,
            category_id   : 1,
            name          : " Eyes Polo",
            material      : "Chất liệu: vải cá sấu 100% cotton co dãn 4 chiều.",
            information   : " Áo thun có cổ được may chi tiết lông mày và lông mi kết hợp với nút áo, tạo nên một con mắt tuyệt đẹp.",
            from          : 'Viet Nam',
            price         : 320000
           // size ml 
        },{
            product_line_id : 2,
            category_id   : 1,
            name          : "Passion Tee",
            material      : "Chất liệu: vải cotton 100% co dãn 4 chiều.",
            information   : " Được phối hợp với kỹ thuật in chất lượng, với dòng chữ ngang được in với kỹ thuật in decal kim tuyến rất lung linh luôn nha",
            from          : 'Viet Nam',
            price         : 290000,

            // M L
        },{
            product_line_id : 3,
            category_id   : 1,
            name          : " Signature",
            material      : "Chất liệu: 100% cotton co dãn 4 chiều.",
            information   : "Logo mặt trước được thêu bằng công nghệ thêu xù độc lạ, đằng sau được thêu vi tính chi tiết từng nét",
            from          : 'Viet Nam',
            price         : 290000
        },{
            product_line_id : 4,
            category_id   : 1,
            name          : " Dreamer season 2",
            material      : "Chất liệu:  vải nhung ",
            information   : "Hình in được in chất liệu in dẻo chất lượng cao không bị bong tróc khi giặt và không bị phai màu.",
            from          : 'Viet Nam',
            price         : 300000
        },{
            product_line_id : 5,
            category_id   : 2,
            name          : " Signature",
            material      : "Chất liệu:  vải nhung ",
            information   : " Logo được thêu xù nổi bật. Chữ đằng sau áo được thêu vô cùng tỉ mỉ. Vải lót xịn được lót phía trong áo khoác",
            from          : 'Viet Nam',
            price         : 400000
        },{
            product_line_id : 6,
            category_id   : 1,
            name          : "Happiness Season 1",
            material      : "Chất liệu: 100% cotton co dãn 4 chiều",
            information   : "được làm từ cotton 100% cao dãn 4 chiều nên cảm giác cực kì mát mẻ và dễ chịu khi mặc áo của AD luôn.",
            from          : 'Viet Nam',
            price         : 230000
        }
    ]

    await ProductLineModel.bulkCreate(ProductLine)


    const colors = [
        {
            color_id : 1,
            product_line_id : 1,
            color_name  : "black"
        },{
            color_id : 2,
            product_line_id : 1,
            color_name  : "white"
        },{
            color_id : 3,
            product_line_id : 1,
            color_name  : "blue"
        },
        
        
        
        {
            color_id : 4,
            product_line_id : 2,
            color_name  : "black"
        },{
            color_id : 5,
            product_line_id : 2,
            color_name  : "white"
        },{
            color_id : 6,
            product_line_id : 2,
            color_name  : "blue"
        },
        
        
        
        
        {
            color_id : 7,
            product_line_id : 3,
            color_name  : "black"
        },{
            color_id : 8,
            product_line_id : 3,
            color_name  : "white"
        },{
            color_id : 9,
            product_line_id : 3,
            color_name  : "blue"
        },
        
        
        {
            color_id : 10,
            product_line_id : 4,
            color_name  : "black"
        },{
            color_id : 11,
            product_line_id : 4,
            color_name  : "white"
        },{
            color_id : 12,
            product_line_id : 4,
            color_name  : "blue"
        },
        
        
        {
            color_id : 13,
            product_line_id : 5,
            color_name  : "black"
        },{
            color_id : 14,
            product_line_id : 5,
            color_name  : "white"
        },{
            color_id : 15,
            product_line_id : 5,
            color_name  : "blue"
        },
        
        
        
        {
            color_id : 16,
            product_line_id : 6,
            color_name  : "black"
        },{
            color_id : 17,
            product_line_id : 6,
            color_name  : "white"
        },{
            color_id :  18,
            product_line_id : 6,
            color_name  : "blue"
        }
    ]



    await db.ProductColors.bulkCreate(colors)


    const warehouseProducts = [
        {   
            
            quantity : 100,
            size_id  : 1,
            color_id : 1,
            product_line_id : 1,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 2,
            product_line_id : 1,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 3,
            product_line_id : 1,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 1,
            product_line_id : 1,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 2,
            product_line_id : 1,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 3,
            product_line_id : 1,
            rate: 0,
            discount: 0,
        },
        
        
        
        {   
            quantity : 100,
            size_id  : 1,
            color_id : 4,
            product_line_id : 2,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 5,
            product_line_id : 2,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 6,
            product_line_id : 2,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 4,
            product_line_id : 2,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 5,
            product_line_id : 2,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 6,
            product_line_id : 2,
            rate: 0,
            discount: 0,
        },
        
        
        
        
        
        {   
            quantity : 100,
            size_id  : 1,
            color_id : 7,
            product_line_id : 3,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 8,
            product_line_id : 3,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 9,
            product_line_id : 3,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 7,
            product_line_id : 3,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 8,
            product_line_id : 3,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 9,
            product_line_id : 3,
            rate: 0,
            discount: 0,
        },
        
        
        
        
        
        {   
            quantity : 100,
            size_id  : 1,
            color_id : 10,
            product_line_id : 4,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 11,
            product_line_id : 4,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 12,
            product_line_id : 4,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 10,
            product_line_id : 4,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 11,
            product_line_id : 4,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 12,
            product_line_id : 4,
            rate: 0,
            discount: 0,
        }




        
        ,{  
            quantity : 100,
            size_id  : 1,
            color_id : 13,
            product_line_id : 5,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 14,
            product_line_id : 5,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 15,
            product_line_id : 5,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 13,
            product_line_id : 5,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 14,
            product_line_id : 5,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 15,
            product_line_id : 5,
            rate: 0,
            discount: 0,
        },







        {   
            quantity : 100,
            size_id  : 1,
            color_id : 16,
            product_line_id : 6,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 17,
            product_line_id : 6,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 1,
            color_id : 18,
            product_line_id : 6,
            rate: 0,
            discount: 0,
        },{
            quantity : 100,
            size_id  : 2,
            color_id : 16,
            product_line_id : 6,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 17,
            product_line_id : 6,
            rate: 0,
            discount: 0,
        },{ 
            quantity : 100,
            size_id  : 2,
            color_id : 18,
            product_line_id : 6,
            rate: 0,
            discount: 0,
        }
    ]

    
    await db.Warehouse.bulkCreate(warehouseProducts)



}
 
 
 

