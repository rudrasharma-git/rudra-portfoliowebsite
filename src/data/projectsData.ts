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
    title: 'Soft Robot Design & Workspace Analysis – "BioGrip Soft Arm"',
    images: ["/Pimg/P8img1.png", "/Pimg/P8img2.png", "/Pimg/P8img3.png"],
    description:
      "Design and simulate a soft robotic manipulator that mimics biological motion — for tasks like gentle object handling or medical use.",
    skills: ["Soft Robotics", "CAD Design", "FEA", "MATLAB", "PyBullet", "Kinematic Analysis", "Control Systems"],
    fullDescription: `**Idea:**
Design and simulate a soft robotic manipulator that mimics biological motion — for tasks like gentle object handling or medical use.

**Implementation:**
- CAD design (Fusion360 / SolidWorks) → pneumatic or cable-driven soft joints
- Simulate in MATLAB / PyBullet to analyze workspace and flexibility
- Develop control using FEA + pressure feedback loop
- Visualize reachable workspace in 3D

**Skills Learned:**
- Soft robotics modeling & FEA
- Kinematic & dynamic analysis
- MATLAB or ROS-based control
- Simulation & experimental validation

**Job Relevance:**
R&D Engineer • Robotics Researcher • Mechatronics Engineer`,
    link: 'https://github.com/rudrasharma-git/Modular-Continuum-Robot-Design-and-Workspace-Analysis',
  },
  
  {
    id: 1,
    title: 'Building an LLM from Scratch – "MicroGPT: Domain-Adapted Mini Language Model"',
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Create a small, efficient transformer trained on domain-specific data (e.g., robotics research papers, industrial automation manuals). The goal is to build a 'domain brain' — a compact model that understands and answers questions about robotics and automation.",
    skills: ["Python", "PyTorch", "NLP", "Transformers", "Deep Learning", "Tokenization", "Fine-tuning", "Gradio"],
    fullDescription: `**Idea:**
Create a small, efficient transformer trained on domain-specific data (e.g., robotics research papers, industrial automation manuals). The goal is to build a "domain brain" — a compact model that understands and answers questions about robotics and automation.

**Implementation:**
- Use Andrej Karpathy's Zero to Hero as the foundation
- Collect open datasets (arXiv, manuals, ROS docs)
- Tokenize and train using PyTorch — start from a simple character-level model → move to transformer
- Fine-tune on your curated robotics corpus
- Build a chatbot interface using Gradio or Streamlit

**Skills Learned:**
- Transformer architecture, training & optimization
- Tokenization, embeddings, attention mechanisms
- Data preprocessing and text cleaning
- Fine-tuning & evaluation metrics (perplexity, BLEU)
- Model deployment (API/Gradio UI)

**Job Relevance:**
LLM Engineer • AI Research Intern • NLP Engineer`,
    link: ' ',
  },
  {
    id: 2,
    title: 'Creating a Vision-Language Model (VLM) from Scratch – "RoboSeeTalk"',
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "Design a small-scale Vision-Language Model that can interpret robot camera feed and explain what it sees — e.g., 'That's a conveyor belt with 5 red boxes' or 'The gripper is misaligned with the object.'",
    skills: ["Computer Vision", "VLM", "ResNet", "ViT", "CLIP", "Multimodal Learning", "PyTorch"],
    fullDescription: `**Idea:**
Design a small-scale Vision-Language Model that can interpret robot camera feed and explain what it sees — e.g., "That's a conveyor belt with 5 red boxes" or "The gripper is misaligned with the object."

**Implementation:**
- Pair small image datasets (FactoryIO screenshots / COCO subset) with text descriptions
- Extract features using a pretrained CNN (ResNet, ViT)
- Encode text with your micro-LLM (from Project 1!)
- Align vision and language embeddings using CLIP-style contrastive learning
- Test on new images — prompt it like: "Describe what's happening here."

**Skills Learned:**
- Vision encoders (CNNs, ViTs)
- Multimodal learning & contrastive training
- Image-caption alignment
- Model integration & pipeline management

**Job Relevance:**
Computer Vision Engineer • Multimodal AI Research • Robotics Perception Engineer`,
    link: ' ',
  },
  {
    id: 3,
    title: 'Virtual Robot Path Planning – "RoboNav SimLab"',
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "A 3D simulation environment (Gazebo or Webots) for testing path planning algorithms — Dijkstra, A*, RRT*, DWA, etc. The goal is to visualize and benchmark planners in complex obstacle-rich maps.",
    skills: ["ROS2", "Gazebo", "Path Planning", "A*", "RRT*", "DWA", "Python", "C++"],
    fullDescription: `**Idea:**
A 3D simulation environment (Gazebo or Webots) for testing path planning algorithms — Dijkstra, A*, RRT*, DWA, etc. The goal is to visualize and benchmark planners in complex obstacle-rich maps.

**Implementation:**
- Use ROS2 + Gazebo/Unity + Python
- Create a simulated warehouse or factory floor
- Implement multiple planners and compare metrics (path length, time, energy)
- Add dynamic obstacles to test re-planning logic
- Optional: integrate with a joystick or keyboard teleop interface

**Skills Learned:**
- ROS2 Navigation Stack
- Path planning algorithms & optimization
- Simulation (Gazebo, Unity Robotics Hub)
- Python + C++ integration

**Job Relevance:**
Robotics Software Engineer • Path Planning Engineer • ROS Developer`,
    link: ' ',
  },
  {
    id: 4,
    title: 'AGV Comparison using LIDAR vs Camera – "SmartVisionNav"',
    images: ["/placeholder.svg", "/placeholder.svg"],
    description:
      "Compare two navigation systems — one based on LIDAR SLAM, and another using monocular/depth camera vision. Evaluate accuracy, latency, and cost trade-offs.",
    skills: ["ROS2", "SLAM", "LIDAR", "Computer Vision", "ORB-SLAM", "Sensor Fusion", "Gazebo"],
    fullDescription: `**Idea:**
Compare two navigation systems — one based on LIDAR SLAM, and another using monocular/depth camera vision. Evaluate accuracy, latency, and cost trade-offs.

**Implementation:**
- Create a mobile robot in simulation (or small hardware platform with Raspberry Pi)
- LIDAR-based: Use gmapping / Hector SLAM
- Camera-based: Use ORB-SLAM / DSO
- Test in identical virtual environments (Gazebo)
- Generate performance report (mapping accuracy, localization drift, computational load)

**Skills Learned:**
- SLAM algorithms (LIDAR & visual)
- Sensor data fusion
- ROS2 and sensor drivers
- Evaluation and benchmarking methodology

**Job Relevance:**
Autonomous Vehicle Engineer • Robotics Perception • Embedded Vision Developer`,
    link: ' ',
  },
  {
    id: 5,
    title: 'Robot Vision – "Defect Detection on Conveyor System"',
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description:
      "Develop a real-time defect detection system for factory products (e.g., detecting cracks, dents, or mislabels). Use camera feed and CNN-based detection.",
    skills: ["Computer Vision", "YOLOv8", "OpenCV", "Object Detection", "Real-time Processing", "Edge AI"],
    fullDescription: `**Idea:**
Develop a real-time defect detection system for factory products (e.g., detecting cracks, dents, or mislabels). Use camera feed and CNN-based detection.

**Implementation:**
- Dataset: capture or generate synthetic defect data
- Model: train YOLOv8 or EfficientDet
- Integration: live video feed through OpenCV
- Output: defect localization + automatic trigger signal (simulate PLC output)

**Skills Learned:**
- Object detection & segmentation
- Real-time vision integration (OpenCV + AI)
- Model quantization for edge devices
- Deployment in industrial scenarios

**Job Relevance:**
Computer Vision Engineer • Automation Engineer • Quality Inspection AI Developer`,
    link: ' ',
  },
  {
    id: 6,
    title: 'Machine Design and Offline Robot Programming using SolidWorks and RoboDK',
    images: ["/Pimg/P6img1.png", "/Pimg/P6img2.png", "/Pimg/P6img3.png", "/Pimg/P6img4.png", "/Pimg/P6img5.png", "/Pimg/P6img6.png"],
    description:
      "Automate a virtual production line in Factory I/O using Siemens TIA Portal / Codesys. Implement smart logic like predictive maintenance and adaptive scheduling.",
    skills: ["Factory I/O", "PLC Programming", "Siemens TIA Portal", "OPC-UA", "SCADA", "HMI", "Automation"],
    fullDescription: `**Idea:**
Automate a virtual production line in Factory I/O using Siemens TIA Portal / Codesys. Implement smart logic like predictive maintenance and adaptive scheduling.

**Implementation:**
- Build a Factory I/O scene (e.g., sorting line, filling station)
- Connect PLC through OPC-UA or Modbus
- Add logic in Ladder + Structured Text for sensors/actuators
- Create a dashboard (Node-RED / Python Flask) to visualize status

**Skills Learned:**
- PLC programming (Siemens / Allen-Bradley)
- Industrial communication protocols
- HMI / SCADA basics
- Digital twin integration

**Job Relevance:**
Industrial Automation Engineer • Controls Engineer • Mechatronics Engineer`,
    link: 'https://github.com/rudrasharma-git/My-CAD',
  },
  {
    id: 7,
    title: 'SPM Design & Deployment – "Iron Temperature Testing Station"',
    images: ["/Pimg/P7img1.jpg", "/Pimg/P7img2.jpg", "/Pimg/P7img3.jpg", "/Pimg/P7img4.jpg", "/Pimg/P7img5.jpg"],
    description:
      "Design a Special Purpose Machine (SPM) for automated iron temperature testing. It measures, logs, and signals if the sample is out of tolerance.",
    skills: ["PLC Programming", "HMI Development", "Control Systems", "Circuit Design", "WinCC", "Industrial Automation"],
    fullDescription: `**Idea:**
Design a Special Purpose Machine (SPM) for automated iron temperature testing. It measures, logs, and signals if the sample is out of tolerance.

**Implementation:**
- Hardware: design fixture + sensors (RTD/Thermocouple) + relay system
- PLC wiring: control logic for measurement & sorting
- HMI: show live temperature, graphs, status indicators
- System integration: deploy full assembly and log data to cloud/local DB

**Skills Learned:**
- PLC wiring & circuit design
- Control logic programming (Ladder / ST)
- HMI development (WinCC / FactoryTalk)
- Full system commissioning

**Job Relevance:**
Automation Engineer • Control Systems Developer • Mechatronics Design Engineer`,
    link: ' ',
  },
  
];
