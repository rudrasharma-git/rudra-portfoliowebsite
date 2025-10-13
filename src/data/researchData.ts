export interface ResearchItem {
  id: number;
  title: string;
  images: string[];
  description: string;
  status: string;
  skills: string[];
  fullDescription: string;
}

export const researchData: ResearchItem[] = [
  {
    id: 1,
    title: "Dynamic Analysis and Simulation of a Double Parallelogram-Based MIS Robot",
    images: ["/Rimg/R1img1.png", "/placeholder.svg", "/placeholder.svg"],
    description:
      "This work focused on the dynamic modeling and analysis of the Remote Center of Motion (RCM) in a double-parallelogram-based minimally invasive surgical (MIS) robot. The system was modeled using the Euler–Lagrange formulation to compute dynamic forces at the RCM.",
    status: "Research",
    skills: ["Robotics Dynamics", "MATLAB", "SolidWorks", "ADAMS", "Euler-Lagrange", "RCM Analysis"],
    fullDescription: `**Description:**
This work focused on the dynamic modeling and analysis of the Remote Center of Motion (RCM) in a double-parallelogram-based minimally invasive surgical (MIS) robot. The system, being geometrically constrained, was modeled using the Euler–Lagrange formulation to compute the dynamic forces acting on the RCM while considering link length inequalities — the key novelty of this study.

A SolidWorks-based FBD model was developed to obtain geometric parameters, followed by kinematic and constraint modeling in MATLAB. The dynamic model integrated these constraints to evaluate the torque deviation at the RCM due to manufacturing inaccuracies. The results were validated against ADAMS simulations, showing consistency and quantifying the sensitivity of RCM deviation to link-length perturbations.

**Skills Learned:**
- Advanced robot dynamics and kinematics (Euler–Lagrange and constraint modeling)
- MATLAB simulation and symbolic computation
- Multibody dynamics using ADAMS
- SolidWorks design and FBD modeling
- Sensitivity and RCM deviation analysis in constrained mechanisms
- Understanding of geometric constraint systems and their effect on dynamic stability`,
  },
  {
    id: 2,
    title: "Adaptive Deep Reinforcement Learning Control for a Soft Continuum Robotic Catheter in MIS",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "This project proposed an adaptive hybrid control strategy for a cable-driven soft continuum robotic catheter used in minimally invasive surgery, integrating deep reinforcement learning with physics-based models.",
    status: "Research",
    skills: ["Deep RL", "Soft Robotics", "DDPG", "PPO", "SOFA", "MuJoCo", "PyBullet", "ROS2", "PyTorch"],
    fullDescription: `**Description:**
This project proposed an adaptive hybrid control strategy for a cable-driven soft continuum robotic catheter used in minimally invasive surgery. The control framework integrated deep reinforcement learning (RL) with physics-based models, trained using domain-randomized simulations in SOFA, MuJoCo, and PyBullet/SoMo environments.

A key innovation was the incorporation of fiber Bragg grating (FBG) shape sensors for proprioceptive feedback and online adaptation, enabling real-time shape servo control under uncertain tissue interactions. The hybrid analytic + learned control pipeline achieved fine motion correction and adaptive compensation for unmodeled dynamics, validated through simulation and phantom experiments.

**Skills Learned:**
- Soft robotics design and control (continuum kinematics, Cosserat modeling)
- Deep Reinforcement Learning (DDPG, PPO, SAC) for robotic control
- Hybrid ML-physics modeling and sim-to-real transfer
- Simulation environments: SOFA, MuJoCo, PyBullet, Isaac Sim
- Sensor integration (FBG optical sensing, feedback-based adaptation)
- ROS/ROS2 integration and real-time control implementation
- Python/C++ development with PyTorch, TensorFlow, and Stable Baselines3
- Experience with domain randomization, adaptive learning, and MPC
- Biomedical robotics: tissue-safe design and control for MIS`,
  },
  {
    id: 3,
    title: "Integration of 4D Printing in Soft Robotics",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "This systematic review comprehensively analyzed the integration of 4D printing technologies within soft robotics, emphasizing material programming, actuation mechanisms, and structural design.",
    status: "Review",
    skills: ["4D Printing", "Soft Robotics", "Material Science", "Systematic Review", "SIGMA 2020 Protocol"],
    fullDescription: `**Description:**
This systematic review comprehensively analyzed the integration of 4D printing technologies within soft robotics, emphasizing material programming, actuation mechanisms, and structural design. Using the SIGMA 2020 methodology for unbiased literature selection, the study categorized findings across key domains — including material characterization, simulation, design methodologies, fabrication techniques, and applications in adaptive robotic systems.

The review consolidated emerging research trends in stimuli-responsive materials and programmable architectures, providing a comparative framework to guide future innovations in self-morphing soft robots.

**Skills Learned:**
- Systematic literature review methodology (SIGMA 2020 protocol)
- Understanding of 4D printing principles and stimuli-responsive materials
- Knowledge of material programming and structural morphing in soft robotics
- Analytical comparison of design, simulation, and fabrication frameworks
- Scientific writing, data extraction, and critical synthesis of technical literature`,
  },
  {
    id: 4,
    title: "A Systematic Literature Review of RCM-Based MIS Robot Mechanisms",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "This review systematically examined various RCM-based mechanisms developed for minimally invasive surgical robots, covering their geometric designs, control strategies, kinematic and dynamic modeling approaches.",
    status: "Review",
    skills: ["Medical Robotics", "RCM Mechanisms", "Kinematics", "Literature Review", "Control Systems"],
    fullDescription: `**Description:**
This review systematically examined various RCM-based mechanisms developed for minimally invasive surgical robots, covering their geometric designs, control strategies, kinematic and dynamic modeling approaches, and workspace analyses. The study compared forward/inverse kinematic formulations, RCM enforcement techniques, and simulation frameworks used for validating RCM stability.

The review also summarized the evolution of control architectures and actuation systems across different MIS robot designs, highlighting performance metrics and application domains.

**Skills Learned:**
- In-depth understanding of RCM-based surgical robot architectures
- Kinematic, dynamic, and workspace modeling methodologies
- Knowledge of control system design for constrained robotic systems
- Experience in comparative evaluation and synthesis of research literature
- Technical writing and scientific documentation of robotic mechanisms`,
  },
  {
    id: 5,
    title: "Design of Soft Robots: A Review",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "This extensive review covered over 380 research papers (1961–2025) to chart the evolution of soft robotics design, focusing on actuators, sensors, control paradigms, and fabrication technologies.",
    status: "Review",
    skills: ["Soft Robotics", "Actuators", "Sensors", "AI Control", "Materials Science", "Fabrication"],
    fullDescription: `**Description:**
This extensive review covered over 380 research papers (1961–2025) to chart the evolution of soft robotics design, focusing on actuators, sensors, control paradigms, and fabrication technologies. The paper explored material innovations such as shape-memory polymers, hydrogels, and liquid crystal elastomers, along with advanced manufacturing techniques like 3D/4D printing and origami-inspired fabrication.

Control methodologies including reinforcement learning and physics-informed AI were analyzed for handling soft systems' nonlinearities. The study concluded with identified challenges and future directions in bioinspired design, adaptive sensing, and AI-based control for next-generation soft robots.

**Skills Learned:**
- Extensive literature analysis and synthesis (380+ sources)
- Understanding of soft actuator and sensor technologies
- Knowledge of smart materials and advanced fabrication techniques
- Familiarity with AI-driven control approaches for nonlinear soft systems
- Experience in trend identification, technical summarization, and future research mapping`,
  },
];
