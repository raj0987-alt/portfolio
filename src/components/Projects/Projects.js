import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/challan.png";
import emotion from "../../Assets/Projects/hotel.webp";
import editor from "../../Assets/Projects/visitor.png";
import chatify from "../../Assets/Projects/inventory.png";
import suicide from "../../Assets/Projects/course.svg";
import bitsOfCode from "../../Assets/Projects/staff.png";
import company from "../../Assets/Projects/company.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Inventory Control System"
              description={<>
              <p>*	Providing three easy continuous stages to manage the inventory control system.</p>
              <p>*	Informative dashboard (buyer, style, po, bin information at a glance).</p>
              <p>*	Easy booking system.</p>
              <p>*	Generate barcode for every roll and cartoon in a very quick process in the pre stage.</p>
              <p>*	Print barcode token with necessary information and attached them with items when the item arrives.</p>
              <p>*	The whole receives and issue process occurs with barcode scanning. So, there is no need any paperwork or manually input for it.</p>
              <p>* The recap history and inventory status also create when a barcode scanning. Which is very time consuming and easy.</p>
              <p>* Style and item wise inventory status.</p>
              <p>* Rack summary details.</p>
              <p>* A very attractive, informative and outstanding live bin card system which can be access with scanning a QRcode attached with the bin card.</p>
              <p>* An informative location board system with a QRcode access. In the location board anyone can visit the whole warehouse by accessing just one url. Which is very attractive to buyer.</p>
              <p>* Providing all report for audit for audit purpose.</p>
              <p>* A complete knitting factory inventory control system.</p>

              </>
              
           
            }
              link="https://github.com/raj0987-alt/Inventory-Control-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Staff Movement System"
              description={<>
              <p>* Staff movement software is automated with a ZK time
machine.
</p>
              <p>* Automatically count the spent time of a staff when he
punched.</p>
              <p>* A live movement window in a monitor is located near the ZK
time machine which allows the users to review the monthly
movement record to make sure that the staff has the
permission to go outside or not when the staff punched the
machine.</p>
              <p>* Monthly or any time movement reports of all staff.
</p>
              </>}
              link="https://github.com/raj0987-alt/staff_movement_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Visitor Movement System"
              description={<>
              <p>* The visitor movement system is automated with an RFID</p>
              <p>* Automatically count the time a visitor passed into the
o</p>
              <p>* Specific the employee whom the visitor needs to visit and why</p>
              
              
              </>}
              link="https://github.com/raj0987-alt/visitor_movement_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Challan And Bill Management System"
              description={<>
                <p>* All types of challan entry into the system. </p>
                <p>* The challan is checked by Security, Concern Section, Audit, and Store step by step.</p>
                <p>* Create a bill according to the challan/invoice. </p>
                <p>* An audit can investigate the bill. </p>
                <p>* An accountant can see the details to pay the bill. </p>
                <p>* All challan reports can be shown at any time.</p>
              
              </>}
              link="https://github.com/raj0987-alt/goods_information"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Course Management System"
              description={
                <>
                <p>* An advisor can create courses and semesters and add
offered courses for the semester.
</p>
                <p>* Students can apply for registered courses.</p>
                <p>* An advisor can approve or reject courses applied by
students.
</p>
                </>
              }
              link="https://github.com/raj0987-alt/OnlineCourseReg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Online Hotel Booking System"
              description={<>
              <p>* Booking Seat in hotel room.</p>
              </>}
              link="https://github.com/raj0987-alt/Hotel-Booking-Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={company}
              isBlog={false}
              title="IT Company Portfolio Website"
              description={<>
              <p>* Full Dynamic Dashboard.
</p>
              <p>* User Friendly.
</p>
              </>}
              link="https://github.com/raj0987-alt/it_company_portfolio"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My own portfolio website"
              description={
                <>
                <p>* My portfolio site.</p>
                </>
              }
              link="https://github.com/raj0987-alt/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
