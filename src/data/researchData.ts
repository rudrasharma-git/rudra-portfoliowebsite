export interface ResearchItem {
  id: number;
  title: string;
  images: string[];
  description: string;
  status: string;
  skills: string[];
  fullDescription: string;
  link?: string;
}

export const researchData: ResearchItem[] = [
  {
    id: 1,
    title: "Dynamic Analysis and Simulation of a Double Parallelogram-Based RCM Mechanism for MIS Robots",
    images: ["/Rimg/R1img1.png", "/Rimg/R1img2.png", "/Rimg/R1img3.png"],
    description:
      "This research focuses on the dynamic modeling of a double-parallelogram Remote Center of Motion (RCM) mechanism used in minimally invasive surgical (MIS) robots. The study began with the development of a comprehensive kinematic model to derive the constraint equations governing the active joint parameters.",
    status: "Research",
    skills: ["Robot Kinematics", "Robot Dynamics", "MATLAB", "SolidWorks", "Precision Design", "ADAMS", "Euler-Lagrange Model", "RCM Analysis", "Surgical Robotics"],
    fullDescription: 
`DESCRIPTION: This research focuses on the dynamic modeling of a double-parallelogram Remote Center of Motion (RCM) mechanism used in minimally invasive surgical (MIS) robots. The study began with the development of a comprehensive kinematic model to derive the constraint equations governing the active joint parameters.

A key novelty of this work lies in the consideration of link length inequalities arising from manufacturing tolerances, a factor often overlooked in prior studies but highly relevant to real-world implementations. Additionally, unlike most research that focuses solely on end-effector dynamics, this work extends the analysis to the RCM point—the critical pivot about which the surgical tool operates—thereby offering a more physically accurate insight into system behavior.

The double-parallelogram configuration was selected for its ability to achieve a geometrically constrained RCM and maintain decoupled joint parameters, enhancing control accuracy and mechanical stability. Kinematic and dynamic formulations were derived and computed using MATLAB, employing the Euler–Lagrange approach for dynamic modeling.

To validate the analytical model, a CAD-based simulation of the mechanism was developed and analyzed within the ADAMS environment. Comparative results between the analytical and simulation models were used to evaluate the torque characteristics at the RCM point, confirming the accuracy and robustness of the proposed dynamic model.

THE RESEARCH IS IN PROGRESS AND WILL BE UPDATED SOON`,

link: 'https://github.com/rudrasharma-git/RCM-Design-Kinematic-Dynamics-Simulation',
  },

  {
    id: 2,
    title: "Adaptive Deep Reinforcement Learning Framework for Real-Time 3D Shape Control of Continuum Soft Robots",
    images: ["/Rimg/R2img1.png", "/Rimg/R2img2.png", "/Rimg/R2img3.png"],
    description:
      "Soft continuum robots are transforming fields like minimally invasive surgery and human-robot collaboration due to their flexibility and safety. However, their nonlinear dynamics and difficult-to-model deformations make real-time control extremely challenging. This project integrates advanced sensing, adaptive control, and reinforcement learning to overcome those limitations, enabling accurate and intelligent motion control for next-generation soft robots." ,   
    status: "Research",
    skills: ["Deep RL", "Soft Robotics", "DDPG", "PPO", "SOFA", "MuJoCo", "PyBullet", "ROS2", "PyTorch"],
    fullDescription: 
`1. Background

Soft continuum robots are transforming fields like minimally invasive surgery and human-robot collaboration due to their flexibility and safety. However, their nonlinear dynamics and difficult-to-model deformations make real-time control extremely challenging. This project integrates advanced sensing, adaptive control, and reinforcement learning to overcome those limitations, enabling accurate and intelligent motion control for next-generation soft robots.

2. Objective

The goal is to develop a hybrid adaptive reinforcement learning (RL) controller capable of real-time 3D shape control of a fiber Bragg grating (FBG)-embedded continuum robot. The system learns and adapts dynamically to unstructured environments while maintaining stability, accuracy, and robustness.

3. Novelty

  - Hybrid Learning Control: Combines adaptive neural network control (for guaranteed stability) with reinforcement learning (for adaptability and data-driven optimization).
  - Sensor-Driven Intelligence: Uses FBG feedback for proprioceptive learning — allowing the robot to “feel” and adjust its own shape in real time.
  - Reduced Training Time: Employs an Axis-Space (AS) RL framework to drastically reduce sample complexity and speed up convergence.
  - Theoretical Stability: Integrates Lyapunov-based adaptation for mathematically proven convergence and safety.
  - Real-World Focus: Designed for use in surgical and inspection robots operating in unpredictable environments.

4. Scope

- The research sits at the intersection of soft robotics, machine learning, and nonlinear control systems, covering:
- Real-time modeling and control of soft continuum manipulators.
- Reinforcement learning policy design for high-DOF systems.
- Integration of fiber Bragg grating sensors for 3D shape estimation.
- Safe learning and adaptation under environmental uncertainty.

5. Skills Involved

- Soft robotics design and actuation mechanisms
- Machine learning & reinforcement learning (DDQN, ASDDQN, policy optimization)
- Adaptive neural network control & Lyapunov stability analysis
- Signal processing and sensor fusion (FBG data filtering)
- Simulation and modeling (MATLAB, Python, SoRoSim, Elastica)

6. Methodology

  - System Modeling: Design a tendon-driven soft robot embedded with FBG sensors for 3D shape feedback.
  - FBG-Based Learning: Implement adaptive neural networks for online modeling and shape estimation.
  - Reinforcement Learning: Develop an Axis-Space DDQN controller for efficient policy learning in simulation.
  - Hybrid Control Integration: Fuse adaptive control and RL policy to ensure real-time stability and learning adaptability.
  - Testing & Validation: Compare against baseline controllers for tracking accuracy, convergence speed, and robustness.
  - Simulation-to-Reality Transfer: Deploy on physical prototypes and analyze real-world adaptability.

7. Expected Outcomes

  - Real-time adaptive control system for continuum robots.
  - 10× faster convergence and 5× improved accuracy compared to standard DRL methods.
  - A generalizable hybrid framework for learning-based control of soft manipulators.
  - Potential applications in surgical robotics, industrial inspection, and biomechanical systems.

8. Future Extensions

  - Multi-modal sensor fusion (FBG + vision).
  - Bimanual or multi-segment continuum robot coordination.
  - Meta-learning for task transfer across different robot morphologies.
  
  THE RESEARCH IS IN PROGRESS AND WILL BE UPDATED SOON. IF YOU WANT TO KNOW MORE ABOUT THIS RESEARCH OR COLLABORATE, FEEL FREE TO REACH OUT TO ME.`,

    link:'https://www.linkedin.com/in/rudra-sharma-3045992b1/' ,
  },

  {
    id: 3,
    title: "Integration of 4D Printing in Soft Robotics",
    images: ["/Rimg/R3img1.png"],
    description:
      "This work presents a systematic review of recent advancements in 4D printing, with a specific emphasis on material innovations, structural programming strategies, and their integration into the field of soft robotics. The review synthesizes findings from studies between 1965–2025, focusing on stimuli-responsive materials such as shape-memory polymers (SMPs), hydrogels, liquid crystal elastomers (LCEs), and liquid metal composites (e.g., EGaln-SLMNPs) that enable dynamic shape transformations under thermal, optical, magnetic, or pH stimuli. It explores advanced design methodologies, including bio-inspired structures (e.g., limpet-inspired actuators, Mimosa-like robots), multi-material systems, and computational models (FEA, multi-physics simulations) for optimizing adaptive behaviours. ",
    status: "Review",
    skills: ["4D Printing", "Soft Robotics","FEA", "Smart Materials", "Systematic Literature Review", "Sensors & Actuators"],
    fullDescription: `DESCRIPTION:

This work presents a systematic review of recent advancements in 4D printing, with a specific emphasis on material innovations, structural programming strategies, and their integration into the field of soft robotics. The review synthesizes findings from studies between 1965–2025, focusing on stimuli-responsive materials such as shape-memory polymers (SMPs), hydrogels, liquid crystal elastomers (LCEs), and liquid metal composites (e.g., EGaln-SLMNPs) that enable dynamic shape transformations under thermal, optical, magnetic, or pH stimuli. It explores advanced design methodologies, including bio-inspired structures (e.g., limpet-inspired actuators, Mimosa-like robots), multi-material systems, and computational models (FEA, multi-physics simulations) for optimizing adaptive behaviours. 

The review highlights applications in soft robotics, such as self-deploying grippers, crawling/swimming robots, and biomedical devices, while addressing challenges in scalability, multi-material integration, and cyclic durability. Key innovations discussed include hybrid liquid metal-hydrogel actuators, biodegradable stiffness-tunable composites, and AI-driven design frameworks. Concluding with future directions, advocating for AI/quantum computing-enhanced modelling, sustainable materials, and hybrid manufacturing techniques to advance functional 4D-printed soft robotic systems. 

THE PAPER IS IN THE PROCESS OF PUBLICATION, THE LINK WILL BE UPDATED SOON`,
    link: ' ',
  },

  {
    id: 4,
    title: "A Systematic Literature Review of RCM-Based MIS Robot Mechanisms",
    images: ["/Rimg/R4img1.png", "/Rimg/R4img2.png"],
    description:
      "This review systematically examined various RCM-based mechanisms developed for minimally invasive surgical robots, covering their geometric designs, control strategies, kinematic and dynamic modeling approaches.",
    status: "Review",
    skills: ["Medical Robotics", "RCM Mechanisms", "Robot Kinematics", "Inverse Kinematics", "Workspace Analysis", "Dynamic Modelling", "Robot Control Systems", "Literature Review"],
    fullDescription: `DESCRIPTION:

This review systematically examines various RCM-based mechanisms developed for minimally invasive surgical robots, covering their geometric designs, control strategies, kinematic and dynamic modeling approaches, and workspace analyses. The study compares forward/inverse kinematic formulations, RCM enforcement techniques, and simulation frameworks used for validating RCM stability.

The review also summarizes the evolution of control architectures and actuation systems across different MIS robot designs, highlighting performance metrics and application domains.

Skills Learned:
- In-depth understanding of RCM-based surgical robot architectures
- Kinematic, dynamic, and workspace modeling methodologies
- Knowledge of control system design for constrained robotic systems
- Experience in comparative evaluation and synthesis of research literature
- Technical writing and scientific documentation of robotic mechanisms

THE PAPER IS UNDER PROCESS OF PUBLISHING, LINK WILL BE UPDATED SOON`,
    link: ' ',
  },
  {
    id: 5,
    title: "Design of Soft Robots: A Review",
    images: ["/Rimg/R5img1.png","/Rimg/R5img2.png"],
    description:
      "Soft robots, characterized by their compliance and flexibility, have gathered significant attention in recent years for their potential applications across diverse fields and for revolutionizing conventional robotics by mimicking natural organisms.",
    status: "Review",
    skills: ["Soft Robotics", "Soft Actuators", "Soft Sensors", "Deep Learning Control Model","DL/RL/DRL/SL/SSL/USL", "Materials Science", "AM Fabrication"],
    fullDescription: `DESCRIPTION:

Soft robots, characterized by their compliance and flexibility, have gathered significant attention in recent years for their potential applications across diverse fields and for revolutionizing conventional robotics by mimicking natural organisms. 

The current work presents an exhaustive review of the evolution of soft robotics, focusing on design methodologies, actuation, sensing, kinematics, dynamics, and control procedures. The mentioned robots are classified according to their use in various fields such as healthcare, bionic underwater exploration, human-robot interaction, etc. In addition, they are known for their enhanced dexterity, safety, and interaction ability. 

The realization of soft robots has been greatly influenced by the progress made in hydrogels, shape-memory alloys, self-healing polymers, and elastomers. These material advancements have brought significant improvements in the mentioned fields. Further, this paper aims to investigate the use of bio-inspired patterns and mechanisms to enhance the functionality and adaptability of soft robots in various environments. Furthermore, a comparison of soft robots has been presented that is based on their control schemes. It offered a valuable perspective on the effectiveness, productivity, and feasibility of various soft robotic methodologies. 

Moreover, 250+ papers have been reviewed to summarize the developments over the years, from 1961 to 2024, in this domain to identify the possible research gaps and propose near-future research directions. The authors believe that the present work will act as a beneficial information resource for engineers/scientists working in the area of soft robotics. Finally, based on the work presented in this manuscript, concluding remarks are drawn.

THE PAPER IS IN THE PROCESS OF PUBLICATION, LINK WILL BE UPDATED SOON`,
    link: ' ',
  },
];
