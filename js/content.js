/*
 * Site content lives here so future updates do not require editing markup.
 * Add a featured project to `featuredProjects` or a paper to `publications`.
 * Supported links: project, paper, and code.
 */

window.SITE_CONTENT = {};

window.SITE_CONTENT.featuredProjects = [
    {
        year: "2026",
        title: "Xiaomi-Robotics-1: Scaling Vision-Language-Action Models with over 100K Hours of Real-World Trajectories",
        venue: "Technical Report",
        topic: "Vision-Language-Action",
        description: "A ready-to-use robot foundation model trained with over 100K hours of real-world manipulation trajectories for mobile manipulation and efficient downstream adaptation.",
        authors: "Jun Guo, Piaopiao Jin, Jason Li, Peiyan Li, Yingyan Li, Futeng Liu, <strong>Wanli Peng</strong>, Optimus Qin, Yifei Su, Nan Sun, Qiao Sun, Runze Suo, Heyun Wang, Yunhong Wang, Rujie Wu, Caoyu Xia, Lina Zhang, Jack Zhao, Guoliang Chen, Wenlong Chen, Xinze He, Bin Li, Qing Li, Zhuorong Li, Heng Qu, Wenxuan Song, Diyun Xiang, Yifan Xie, Peiran Xu, Hangjun Ye, Wen Ye, Han Zhao, Quanyun Zhou",
        image: "images/xiaomi-robotics-1-figure1.jpg",
        imageAlt: "Figure 1 from the Xiaomi-Robotics-1 technical report",
        links: {
            project: "https://robotics.xiaomi.com/xiaomi-robotics-1.html",
            paper: "https://robotics.xiaomi.com/robot-static-resource/xiaomi-robotics-1/xiaomi-robotics-1.pdf",
            code: "https://github.com/XiaomiRobotics/Xiaomi-Robotics-1"
        }
    },
    {
        year: "2026",
        title: "Xiaomi-Robotics-U0: Unified Embodied Synthesis with World Foundation Model",
        venue: "Technical Report",
        topic: "World Foundation Model",
        description: "A 38B multimodal autoregressive world foundation model that unifies image generation, image editing, embodied scene generation, embodied transfer, and embodied video generation.",
        authors: "Xinghang Li, Jun Guo, Qiwei Li, Long Qian, Hang Lai, Yueze Wang, Hongyu Yan, Jiahang Cao, Xi Chen, Jingen Qu, Jiaxi Song, Nan Sun, Hanye Zhao, Futeng Liu, <strong>Wanli Peng</strong>, Heyun Wang, Yunhong Wang, Caoyu Xia, Jack Zhao, Diyun Xiang, Hangjun Ye, Heng Qu, Huaping Liu, Jason Li",
        image: "images/xiaomi-robotics-u0-figure1.jpg",
        imageAlt: "Figure 1 from the Xiaomi-Robotics-U0 technical report",
        links: {
            project: "https://robotics.xiaomi.com/xiaomi-robotics-u0.html",
            paper: "https://arxiv.org/pdf/2607.11643",
            code: "https://github.com/XiaomiRobotics/Xiaomi-Robotics-U0"
        }
    },
    {
        year: "2025",
        title: "GR-RL: Going Dexterous and Precise for Long-Horizon Robotic Manipulation",
        venue: "Technical Report",
        topic: "Robotic Learning",
        description: "A robotic learning framework that turns a generalist vision-language-action policy into a highly capable specialist for long-horizon dexterous manipulation.",
        authors: "Yunfei Li, Xiao Ma, Jiafeng Xu, Yu Cui, Zhongren Cui, Zhigang Han, Liqun Huang, Tao Kong, Yuxiao Liu, Hao Niu, <strong>Wanli Peng</strong>, Jingchao Qiao, Zeyu Ren, Haixin Shi, Zhi Su, Jiawen Tian, Yuyang Xiao, Shenyu Zhang, Liwei Zheng, Hang Li, Yonghui Wu",
        image: "images/gr_rl_teaser.jpg",
        imageAlt: "GR-RL robotic manipulation project teaser",
        links: {
            project: "https://seed.bytedance.com/zh/gr_rl",
            paper: "https://arxiv.org/pdf/2512.01801"
        }
    },
    {
        year: "2025",
        title: "GR-3: A Generalizable and Robust VLA Model",
        venue: "Technical Report",
        topic: "Vision-Language-Action",
        description: "A generalizable and robust vision-language-action model designed for long-horizon and dexterous robotic tasks.",
        authors: "Chilam Cheang, Sijin Chen, Zhongren Cui, Yingdong Hu, Liqun Huang, Tao Kong, Hang Li, Yifeng Li, Yuxiao Liu, Xiao Ma, Hao Niu, Wenxuan Ou, <strong>Wanli Peng</strong>, Zeyu Ren, Haixin Shi, Jiawen Tian, Hongtao Wu, Xin Xiao, Yuyang Xiao, Jiafeng Xu, Yichu Yang",
        image: "images/gr3_teaser.png",
        imageAlt: "GR-3 vision-language-action model project teaser",
        links: {
            project: "https://seed.bytedance.com/en/GR3/",
            paper: "https://arxiv.org/pdf/2507.15493"
        }
    }
];

window.SITE_CONTENT.publications = [
    {
        year: "2023",
        venue: "IEEE RA-L",
        topic: "Robotic Grasping",
        title: "Functional Grasp Transfer Across a Category of Objects From Only One Labeled Instance",
        description: "We propose a category-level multi-fingered functional grasp transfer framework.",
        authors: "Rina Wu, Tianqiang Zhu, <strong>Wanli Peng</strong>, Jinglue Hang, Yi Sun*",
        image: "images/functional_grasp_transfer_teaser.png",
        imageAlt: "Functional grasp transfer teaser",
        links: { paper: "https://ieeexplore.ieee.org/document/10079105" }
    },
    {
        year: "2023",
        venue: "IEEE RA-L",
        topic: "Representation Learning",
        title: "FunctionalGrasp: Learning Functional Grasp for Robots via Semantic Hand-Object Representation",
        description: "A semantic representation of functional hand-object interaction is introduced, together with a coarse-to-fine grasp generation network.",
        authors: "Yibiao Zhang, Jinglue Hang, Tianqiang Zhu, Xiangbo Lin*, Rina Wu, <strong>Wanli Peng</strong>, Dongying Tian, Yi Sun",
        image: "images/FunctionalGrasp_teaser.png",
        imageAlt: "FunctionalGrasp project teaser",
        links: {
            paper: "https://ieeexplore.ieee.org/document/10093013",
            code: "https://github.com/hjlllll/Functionalgrasp"
        }
    },
    {
        year: "2022",
        venue: "ECCV",
        topic: "Category-level Grasping",
        title: "TransGrasp: Grasp Pose Estimation by Transferring Grasps From Only One Labeled Instance",
        description: "A category-level grasp pose estimation method that predicts grasps by labeling only one object instance.",
        authors: "Hongtao Wen, Jianhang Yan, <strong>Wanli Peng*</strong>, Yi Sun",
        image: "images/transgrasp-teaser.jpg",
        imageAlt: "TransGrasp project teaser",
        links: {
            project: "https://sites.google.com/view/transgrasp",
            paper: "https://arxiv.org/pdf/2207.07861.pdf",
            code: "https://github.com/yanjh97/TransGrasp"
        }
    },
    {
        year: "2022",
        venue: "AAAI",
        topic: "6D Object Pose",
        title: "Self-Supervised Category-Level 6D Object Pose Estimation With Deep Implicit Shape Representation",
        description: "A self-supervised method for category-level 6D pose estimation without explicit pose annotations and exact 3D models.",
        authors: "<strong>Wanli Peng</strong>, Jianhang Yan, Hongtao Wen, Yi Sun*",
        image: "images/SSC6D-teaser.jpg",
        imageAlt: "SSC-6D project teaser",
        links: {
            project: "pages/ssc-6d/page.html",
            paper: "https://ojs.aaai.org/index.php/AAAI/article/view/20104",
            code: "https://github.com/swords123/SSC-6D"
        }
    },
    {
        year: "2020",
        venue: "CVPR",
        topic: "Autonomous Driving",
        title: "IDA-3D: Instance-Depth-Aware 3D Object Detection From Stereo Vision",
        description: "An end-to-end learning framework for 3D object detection from stereo images in autonomous driving.",
        authors: "<strong>Wanli Peng</strong>, Hao Pan, He Liu, Yi Sun*",
        image: "images/ida3d-1.jpg",
        imageAlt: "IDA-3D project teaser",
        links: {
            project: "pages/ida-3d/page.html",
            paper: "https://openaccess.thecvf.com/content_CVPR_2020/papers/Peng_IDA-3D_Instance-Depth-Aware_3D_Object_Detection_From_Stereo_Vision_for_Autonomous_CVPR_2020_paper.pdf",
            code: "https://github.com/swords123/IDA-3D"
        }
    }
];
