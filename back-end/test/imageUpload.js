
const db = require('../api/models')();
const imgModel = db.ProductImages

module.exports = async () => {

    const imgC2 = [
        {
            image_path: '137533180_264480551955123_342551269483455382_n.jpg',
            default : true,
            color_id: 2
        },{
            image_path: '137544534_264480545288457_3602992855682571722_n.jpg',
            default : false,
            color_id: 2
        },{
            image_path: '137544534_264480605288451_1862885035156615566_n.jpg',
            default : false,
            color_id: 2
        },{
            image_path: '138596174_264480538621791_6748733196924656553_n.jpg',
            default : false,
            color_id: 2
        },{
            image_path: '139626497_269157844820727_8324023705001203481_n.jpg',
            default : false,
            color_id: 2
        },{
            image_path: '139660921_269157801487398_7269085917078050238_n.jpg',
            default : false,
            color_id: 2
        },{
            image_path: '139698454_269157838154061_4441559334018715313_n.jpg',
            default : false,
            color_id: 2
        },{
            image_path: '140613754_269157794820732_6836430602399631486_n.jpg',
            default : false,
            color_id: 2
        },{
            image_path: '146049622_280471017022743_3010310054683860833_n.jpg',
            default : false,
            color_id: 2
        },{
            image_path: '146124943_280471093689402_1802086954150164995_n.jpg',
            default : false,
            color_id: 2
        }]

    await imgModel.bulkCreate(imgC2);


    const imgC17 = [
        {
            image_path: '79366492_173115284424984_4358949871956117947_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '106005160_173115277758318_279452151808601164_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '106454534_173115274424985_5768699529089772581_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '106719950_173115267758319_7374120844937950517_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '107794841_176695784066934_6267527888189341664_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '108178363_176695770733602_7319796841783721751_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '108191775_176695787400267_2863736780428350850_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '109994306_182796873456825_782796341483249134_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '111290613_182796850123494_2470627774762324658_n.jpg',
            default : false,
            color_id: 17
        },{
            image_path: '112597006_184145326655313_8580633705056743798_n.jpg',
            default : false,
            color_id: 17
        }
        
    ]


    await imgModel.bulkCreate(imgC17);




    const imgC16 = [
        {
            image_path: '110159164_178439057225940_3175136150405937569_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '115628310_184935496576296_2628891160665799456_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '115770043_184935573242955_4839596695601269594_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '116433168_184935513242961_665900465497517347_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '116832497_185813029821876_784408715569972103_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '116887075_185813039821875_2051895716465090552_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '117098139_190392952697217_1853811309580488369_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '117593189_190392969363882_8216975319487562119_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '118631824_197108585358987_5111106897490513191_n.jpg',
            default : false,
            color_id: 16
        },{
            image_path: '118769138_198580835211762_5767660338113970894_n.jpg',
            default : false,
            color_id: 16
        },
    ]




    await imgModel.bulkCreate(imgC16);


    const Dreamer2 = [
        {
            image_path: "121332166_211857567217422_8420118295046803612_n.jpg",
            default: true,
            color_id: 10
    
        },
        {
            image_path: "121679470_213175143752331_8099647783509929979_n.jpg",
            default: false,
            color_id: 10
    
        },
        {
            image_path: "122145486_213175063752339_743054091671345849_n.jpg",
            default: false,
            color_id: 10
        },
        {
            image_path: "124021083_218970673172778_9162308191691559614_n.jpg",
            default: false,
            color_id: 10
        },
        {
            image_path: "124133933_218970666506112_6335392511957235743_n.jpg",
            default: false,
            color_id: 10
        },
        {
            image_path: "133357042_254705112932667_8541951749833728845_n.jpg",
            default: false,
            color_id: 10
        },
        {
            image_path: "140680241_272404861162692_901073767736716313_n.jpg",
            default: false,
            color_id: 10
        },
        {
            image_path: "142403276_272404957829349_5496546912025039691_n.jpg",
            default: false,
            color_id: 10
        },
        {
            image_path: "121813744_213175153752330_583284188266443710_n.jpg",
            default: true,
            color_id: 11
        },
        {
            image_path: "121963318_212213477181831_3625436311335877877_n.jpg",
            default: false,
            color_id: 11
        },
        {
            image_path: "122192350_213175073752338_4154975660579850097_n.jpg",
            default: false,
            color_id: 11
        },
        {
            image_path: "125938719_225609715842207_2025538508263658512_n.jpg",
            default: false,
            color_id: 11
        },
        {
            image_path: "142116326_272404981162680_3212541827674991253_n.jpg",
            default: false,
            color_id: 11
        },
        {
            image_path: "121682369_213175113752334_587906159245363104_n.jpg",
            default: true,
            color_id: 12
        },
        {
            image_path: "121774848_212712893798556_6597858862012512916_n.jpg",
            default: false,
            color_id: 12
        },
        {
            image_path: "122139025_213175103752335_9181648813560021825_n.jpg",
            default: false,
            color_id: 12
        },
        {
            image_path: "123668208_219356896467489_4714837107806827217_n.jpg",
            default: false,
            color_id: 12
        },
        {
            image_path: "123694379_219356889800823_6010563252641384358_n.jpg",
            default: false,
            color_id: 12
        },
        {
            image_path: "126178260_222620819474430_3250147842712111347_n.jpg",
            default: false,
            color_id: 12
        },
        {
            image_path: "124054764_219356893134156_4771778557987799812_n.jpgX",
            default: false,
            color_id: 12
        }
    ]

    await imgModel.bulkCreate(Dreamer2);



    const jacket_signature=[
        {
            image_path: "183714755_342487454154432_1384145809216578833_n.jpg",
            default: true,
            color_id: 13
        },
        {
            image_path: "185368847_342487470821097_6712758436217562278_n.jpg",
            default: true,
            color_id: 13
        },
        {
            image_path: "185662465_341850764218101_6039881478060906628_n.jpg",
            default: true,
            color_id: 13
        },
        {
            image_path: "186481075_341657594237418_653679871527780314_n.jpg",
            default: true,
            color_id: 13
        },
        {
            image_path: "186481075_341657594237418_653679871527780314_n.jpg",
            default: true,
            color_id: 13
        },
        {
            image_path: "186489765_342487530821091_7491059927584062643_n.jpg",
            default: true,
            color_id: 13
        },
        {
            image_path: "186540292_342487527487758_8779786921049203619_n.jpg",
            default: true,
            color_id: 13
        },
        {
            image_path: "207056682_373594911043686_8241841722441919802_n.jpg",
            default: true,
            color_id: 13
        }
    ]



    const ao_thun_signature = [
        {
            image_path: "187494308_353356873067490_8396248145605054600_n.jpg",
            default: true,
            color_id: 7
        },
        {
            image_path: "190263203_353356859734158_394432864626999455_n.jpg",
            default: true,
            color_id: 7
        },
        {
            image_path: "195845677_356527292750448_2837876292505064173_n.jpg",
            default: true,
            color_id: 8
        },
        {
            image_path: "196017494_356527222750455_792592738304558608_n.jpg",
            default: true,
            color_id: 8
        },
    
        {
            image_path: "196149577_356527266083784_1968077833952293411_n.jpg",
            default: true,
            color_id: 8
        }]
        
        await imgModel.bulkCreate(ao_thun_signature);
        await imgModel.bulkCreate(jacket_signature);


}


















