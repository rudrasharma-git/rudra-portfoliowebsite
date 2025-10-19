export interface Project {
  id: number;
  title: string;
  images: string[];
  description: string;
  skills: string[];
  fullDescription: string;
  link?: string;
}

export const projectsData: Project[] = [

  {
    id: 8,
    title: 'Modular Continuum Robot Design and Workspace Analysis',
    images: ["/Pimg/P8img1.png", "/Pimg/P8img2.png", "/Pimg/P8img3.png"],
    description:
      "This project focuses on the design and analysis of a 3-segment modular continuum robot — a flexible, tendon-driven robotic manipulator designed for low-cost, open-source research applications such as minimally invasive procedures and advanced robotic experimentation. The robot’s design emphasizes simplicity, affordability, and adaptability, allowing researchers to easily fabricate and modify it using accessible off-the-shelf components and 3D printing technologies.",
    skills: ["CAD Design", "FEA", "MATLAB", "C/C++", "Arduino", "Kinematic Analysis", "PWM Control", "MATLAB/Simulink"],
    fullDescription: `DESCRIPTION:
    
    This project focuses on the design and analysis of a 3-segment modular continuum robot — a flexible, tendon-driven robotic manipulator designed for low-cost, open-source research applications such as minimally invasive procedures and advanced robotic experimentation. The robot’s design emphasizes simplicity, affordability, and adaptability, allowing researchers to easily fabricate and modify it using accessible off-the-shelf components and 3D printing technologies.

The continuum structure consists of rigid ABS discs connected by flexible TPU ligaments, providing compliant motion similar to biological structures. The robot is actuated through a four-tendon system per segment, driven by MG996R servo motors and controlled via Arduino Uno and a 16-channel PWM driver. A custom Arduino control library was developed to simplify kinematic control, enabling users to manipulate the robot using intuitive directional parameters (θ₁ and θ₂) without requiring complex inverse kinematics.

The robot’s workspace and motion characteristics were experimentally validated using Arduino IDE and MATLAB, demonstrating smooth multi-curve motion and a hemispherical operational workspace. It serves as a foundational open-source platform that lowers the barrier to entry in continuum robotics research and enables further innovation in actuation, control algorithms, and sensing.`,
    link: 'https://github.com/rudrasharma-git/Modular-Continuum-Robot-Design-and-Workspace-Analysis',
  },

  {
    id: 4,
    title: 'Open Source Quadruped Robot Control and Simulation Environment using ROS2: Q-Dog',
    images: ["/Pimg/P4img1.png", "/Pimg/P4img2.png"],
    description:
      "Nowadays, design and development of legged quadruped robots is a quite active area of scientific research. In fact, the legged robots have become popular due to their capabilities to adapt to harsh terrains and diverse environmental conditions in comparison to other mobile robots. With the higher demand for legged robot experiments, more researches and engineers need an affordable and quick way of locomotion algorithm development.",
    skills: ["ROS2", "SLAM", "LIDAR", "Computer Vision", "ORB-SLAM", "Sensor Fusion", "Gazebo", "Gait Generation", "Control Pipeline Design"],
    fullDescription: `DESCRIPTION:
    
    Nowadays, design and development of legged quadruped robots is a quite active area of scientific research. In fact, the legged robots have become popular due to their capabilities to adapt to harsh terrains and diverse environmental conditions in comparison to other mobile robots. With the higher demand for legged robot experiments, more researches and engineers need an affordable and quick way of locomotion algorithm development.

In this project, a new open source quadruped robot Q-Dog platform, which features 12 RC servo motors, onboard NVIDIA Jetson nano computer and STM32F4 Discovery board. Q-Dog is an open-source platform for quadruped robotic software development, which is based on Robot Operating System 2 (ROS2) and micro-ROS. Moreover, the Q-Dog is a quadrupedal robotic dog entirely built from 3D printed parts and carbon fiber, which allows the robot to have light weight and good strength. The idea of this work is to demonstrate an affordable and customizable way of robot development and provide researches and engineers with the legged robot platform, where different algorithms can be tested and validated in simulation and real environment.

The platform utilizes ROS2 and micro-ROS, designed for complex environments. It features 12 degrees of freedom, enabling omnidirectional movement and obstacle navigation. The system includes a Gamepad interface, digital servo motors, and a simulation environment for testing locomotion algorithms, with plans for future developments in dynamic modeling and navigation. `,
    
link: 'https://github.com/rudrasharma-git/Quadruped-Robot-Control-and-SimulationROS',
  },

  {
    id: 5,
    title: 'Path Planning and Trajectory Optimization for a Quadcopter',
    images: ["/Pimg/P5img0.png", "/Pimg/P5img1.png", "/Pimg/P5img2.png", "/Pimg/P5img3.png", "/Pimg/P5img4.png"],
    description:
      "This project focuses on the dynamic modeling, control design, and trajectory generation of an autonomous quadcopter UAV (Unmanned Aerial Vehicle). The objective was to simulate and experimentally validate a control architecture capable of precise 3D flight, trajectory tracking, and stable hovering using MATLAB and onboard control algorithms.",
    skills: ["Control theory", "Dynamic modeling and simulation", "Nonlinear system analysis", "LQR" , "Robot kinematics and dynamics", "MATLAB/Simulink", "Trajectory optimization and planning", "Gain tuning", "Data visualization", "Performance analysis"],
    fullDescription: `DESCRIPTION:
    
    This project focuses on the dynamic modeling, control design, and trajectory generation of an autonomous quadcopter UAV (Unmanned Aerial Vehicle). The objective was to simulate and experimentally validate a control architecture capable of precise 3D flight, trajectory tracking, and stable hovering using MATLAB and onboard control algorithms.

The quadcopter was modeled from first principles, deriving its 6-DOF nonlinear equations of motion using Newton–Euler dynamics. The model incorporated the effects of thrust, drag, inertia, and gyroscopic coupling of propellers.

Two levels of control were implemented:

- Inner-loop attitude controller (roll, pitch, yaw) using PD control with high-frequency feedback.
- Outer-loop position controller that drives position and velocity errors to zero through desired attitude references.

To ensure robustness and precision in flight, Linear Quadratic Regulator (LQR) control was designed for the linearized model around hover conditions, and a nonlinear backstepping control was explored for wider dynamic range. Trajectory planning was achieved using minimum acceleration (3rd order) and minimum snap (7th order) polynomial trajectory generation — ensuring smooth, continuous position, velocity, acceleration, and jerk profiles between waypoints.

Key Technical Aspects:

- Developed dynamic model of a quadrotor using Newton–Euler equations.
- Implemented linearization around hover state to derive state-space representation.
- Designed PD attitude and position controllers for stability and responsiveness.
- Applied LQR optimal control to minimize energy while improving tracking accuracy.
- Implemented trajectory generation using:
	1. Minimum Acceleration (3rd order) polynomials for efficient paths.
	2 .Minimum Snap (7th order) polynomials for smooth, dynamically feasible motion.
- Simulated 3D trajectories (circular, helical, and diamond) using MATLAB ODE45 solver.`,
    
link: 'https://github.com/rudrasharma-git/QuadCopter-PP-TO',
  },


  {
    id: 1,
    title: 'Implementing Micrograd, Makemore and NanoGPT by Andrej Karpathy',
    images: ["/Pimg/P1img1.svg", "/Pimg/P1img2.png", "/Pimg/P1img3.png", "/Pimg/P1img3.5.png", "/Pimg/P1img4.png"],
    description:
      "This project revolves around an in-depth exploration and practical implementation of Andrej Karpathy’s open-source projects — Micrograd, Makemore, and NanoGPT — which serve as foundational learning platforms for understanding the internal mechanics of modern deep learning architectures and large language models (LLMs).",
    skills: ["Neural network structure", "Gradient descent", "Backpropagation", "NLP", "Transformers", "Pytorch", "Tokenization", "Fine-tuning LLMs"],
    fullDescription: `DESCRIPTION:
    
This project revolves around an in-depth exploration and practical implementation of Andrej Karpathy’s open-source projects — Micrograd, Makemore, and NanoGPT — which serve as foundational learning platforms for understanding the internal mechanics of modern deep learning architectures and large language models (LLMs).

The primary goal of this work has been to understand, learn, improvise, and implement each project from the ground up to gain a bottom-up understanding of neural network theory, gradient-based learning, and generative text modeling.

Micrograd: Implemented a minimalist automatic differentiation engine to understand the core concepts of computational graphs, gradient propagation, and backpropagation algorithms.

Makemore: Built a character-level language model to explore tokenization, n-gram probabilities, and neural text generation, emphasizing the transition from statistical modeling to neural approaches.

NanoGPT: Studied and implemented the simplified transformer-based architecture to comprehend attention mechanisms, positional encoding, and training pipelines for generative pre-trained transformers.

This hands-on engagement bridged the theoretical and practical aspects of deep learning, optimization, and natural language generation, leading to a robust understanding of how LLMs operate at the code and mathematical level.`,
    link: 'https://github.com/rudrasharma-git/My-LLM',
  },



  {
    id: 3,
    title: 'Sports Field Anslyser and Player Tracking System',
    images: ["/Pimg/P3img3.png", "/Pimg/P3img1.png", "/Pimg/P3img2.png"],
    description:
      "In this Project, I used machine learning, computer vision and deep learning to create a football analysis system. This project utilizes YOlO a state of the art object detector to detect the players, referees and footballs. It also utilizes trackers to track those object across frames. I also train my own object detector to enhance the output of the state-of-the-art models.  Additionally, I assign players to teams based on the colors of their t-shirts using Kmeans for pixel segmentation and clustering. I also use optical flow to measure camera movement between frames, enabling us to accurately measure a player's movement. Furthermore, I implement perspective transformation to represent the scene's depth and perspective, allowing measurement of a player's movement in meters rather than pixels. ",
    skills: ["YOLOv8", "Computer Vision", "Deep Learning", "Optical Flow", "KMeans Clustering", "Perspective Transformation", "OpenCV", "PyTorch"],
    fullDescription: `DESCRIPTION:
    
In this Project, I used machine learning, computer vision and deep learning to create a football analysis system. This project utilizes YOlO a state of the art object detector to detect the players, referees and footballs. It also utilizes trackers to track those object across frames. I also train my own object detector to enhance the output of the state-of-the-art models.  Additionally, I assign players to teams based on the colors of their t-shirts using Kmeans for pixel segmentation and clustering. I also use optical flow to measure camera movement between frames, enabling us to accurately measure a player's movement. Furthermore, I implement perspective transformation to represent the scene's depth and perspective, allowing measurement of a player's movement in meters rather than pixels. 

Finally, I calculate a player's speed and the distance covered. This project covers various concepts and addresses real-world problems, making it suitable for both beginners and experienced machine learning engineers. Here's a summary:

1. Use Ultralytics and YOLOv8 to detect objects in images and videos.
2. Fine tune and train your own YOLO on your own custom dataset.
3. Use KMeans to cluster pixels and segment players from the background to get the t-shirt color accurately. 
4. Use optical flow to measure the camera movement. 
5. Use CV2's (OpenCV) perspective transformation to represent the scene's depth and perspective. 
6. Measure player's speed and distance covered in the image. `,

    link: 'https://github.com/rudrasharma-git/Computer-Vision-for-Field-Tracking-and-Analysis',
  },


  {
    id: 6,
    title: '3D Machine Design and Offline Robot Programming using SolidWorks and RoboDK',
    images: ["/Pimg/P6img1.png", "/Pimg/P6img2.png", "/Pimg/P6img3.png", "/Pimg/P6img4.png", "/Pimg/P6img5.png", "/Pimg/P6img6.png"],
    description:
      "During this project, I focused on designing, modeling, and simulating robotic systems with real-world applicability. The work involved creating mechanically and kinematically optimized machines using SolidWorks and Autodesk Fusion 360 environments.",
    skills: ["3D CAD Design", "SolidWorks", "RoboDK", "Robot Programming", "Kinematics", "Simulation", "Automation", "Precision Design", "Industrial Systems Integration"],
    fullDescription: `DESCRIPTION:

During this project, I focused on designing, modeling, and simulating robotic systems with real-world applicability. The work involved creating mechanically and kinematically optimized machines using SolidWorks and Autodesk Fusion 360 environments.

Several complex mechanisms were designed and developed, including a Quadrupedal Robot capable of stable and adaptive locomotion. An Industrial Robotic Arm mounted on a translational gantry system for extended workspace and high-precision operations. A Rover integrated with a robotic manipulator, designed for multi-terrain mobility and object handling.

Following the mechanical design phase, the models were exported and programmed using RoboDK, where I developed and simulated the robotic control logic, path planning, and motion sequencing. This included both custom-designed mechanisms and industrial robot models, ensuring they performed assigned tasks with precision, repeatability, and efficiency.

The project provided valuable hands-on experience in the integration of mechanical design and robotic programming, bridging the gap between conceptual modeling and functional automation.`,
    link: 'https://github.com/rudrasharma-git/My-CAD',
  },

  {
    id: 7,
    title: 'SPM Design & Deployment – "Iron Temperature Testing Station"',
    images: ["/Pimg/P7img1.jpg", "/Pimg/P7img2.jpg", "/Pimg/P7img3.jpg", "/Pimg/P7img4.jpg", "/Pimg/P7img5.jpg"],
    description:
      "During my training period at AARGEE Automation and Control, Mohali, I was entrusted with the responsibility of completing a comprehensive industrial automation course. The project was structured around three core domains:",
    skills: ["PLC Programming", "HMI Development", "Circuit Design", "Industrial Automation", "Project Coordination" , "Industrial Communication Protocols", "Troubleshooting and Testing"],
    fullDescription: `DESCRIPTION:
    
    During my training period at AARGEE Automation and Control, Mohali, I was entrusted with the responsibility of completing a comprehensive industrial automation course. The project was structured around three core domains:

- PLC and HMI Programming

- Robot Programming and Simulation

Alongside these modules, I was actively involved in a client-based project focused on the design, production, and assembly of an automated iron testing machine. My responsibilities included:

- Designing and wiring the control box and ensuring electrical safety and compliance.

- Developing and implementing PLC logic for machine control and sequencing.

- Designing the HMI interface for user-friendly monitoring and control.

- Coordinating with mechanical and production teams to meet client specifications and project deadlines.

This experience provided deep practical exposure to industrial automation workflows, control system design, and project management in a professional environment.`,
    link: 'https://www.linkedin.com/in/rudra-sharma-3045992b1/',
  },

  {
    id: 2,
    title: 'Implementing a Multimodal VLM using Contrastive Learning',
    images: ["/Pimg/P2img1.png", "/Pimg/P2img2.png", "/Pimg/P2img3.png"],
    description:
      "Vision language models are broadly defined as multimodal models that can learn from images and text. They are a type of generative models that take image and text inputs, and generate text outputs. Large vision language models have good zero-shot capabilities, generalize well, and can work with many types of images, including documents, web pages, and more. The use cases include chatting about images, image recognition via instructions, visual question answering, document understanding, image captioning, and others. Some vision language models can also capture spatial properties in an image. These models can output bounding boxes or segmentation masks when prompted to detect or segment a particular subject, or they can localize different entities or answer questions about their relative or absolute positions. There’s a lot of diversity within the existing set of large vision language models, the data they were trained on, how they encode images, and, thus, their capabilities.", 
    skills: ["Computer Vision", "VLM", "ResNet", "ViT", "CLIP", "Multimodal Learning", "PyTorch"],
    fullDescription: `Vision language models are broadly defined as multimodal models that can learn from images and text. They are a type of generative models that take image and text inputs, and generate text outputs. Large vision language models have good zero-shot capabilities, generalize well, and can work with many types of images, including documents, web pages, and more. The use cases include chatting about images, image recognition via instructions, visual question answering, document understanding, image captioning, and others. Some vision language models can also capture spatial properties in an image. These models can output bounding boxes or segmentation masks when prompted to detect or segment a particular subject, or they can localize different entities or answer questions about their relative or absolute positions. There’s a lot of diversity within the existing set of large vision language models, the data they were trained on, how they encode images, and, thus, their capabilities.
    
    Full coding of a Multimodal (Vision) Language Model is done from scratch using only Python and PyTorch. 

The coding is done using the PaliGemma Vision Language Model from scratch and based on the concepts explained in the following resources:

- Transformer model (Embeddings, Positional Encoding, Multi-Head Attention, Feed Forward Layer, Logits, Softmax)
- Vision Transformer model
- Contrastive learning (CLIP, SigLip)
- Numerical stability of the Softmax and the Cross Entropy Loss
- Rotary Positional Embedding
- Multi-Head Attention
- Grouped Query Attention
- Normalization layers (Batch, Layer and RMS)
- KV-Cache (prefilling and token generation)
- Attention masks (causal and non-causal)
- Weight tying
- Top-P Sampling and Temperature

and much more!
`,
    
    link: 'https://github.com/rudrasharma-git/My-VLM',
  },

];
