// src/pages/DepartmentsOverview.jsx

import React, { useState } from "react";
import { departments } from '../data/DepartmentsData';
import "../styles/Departments.css";
import DepartmentDetail from "./DepartmentDetail";

export default function DepartmentsOverview() {
  // State for active department and school
  const [activeDeptIdx, setActiveDeptIdx] = useState(0);
  const [activeSchoolIdx, setActiveSchoolIdx] = useState(0);
  const [activeProgramIdx, setActiveProgramIdx] = useState(0);

  // Defensive checks
  const dept = departments[activeDeptIdx] || {};
  const schools = Array.isArray(dept.schools) ? dept.schools : [];
  const school = schools[activeSchoolIdx] || {};
  const programs = Array.isArray(school.programs) ? school.programs : [];
  const activeProgram = programs[activeProgramIdx];

  // Handlers
  const handleDeptChange = (idx) => {
    setActiveDeptIdx(idx);
    setActiveSchoolIdx(0);
    setActiveProgramIdx(0);
  };
  const handleSchoolChange = (idx) => {
    setActiveSchoolIdx(idx);
    setActiveProgramIdx(0);
  };
  const handleProgramChange = (idx) => setActiveProgramIdx(idx);

  return (
    <section className="departments-section">
      <div className="container">
        <h3 className="title_with_halfLine">Programs Offered</h3>
        {/* Main Tabs: Departments */}
        <div className="main-tabs">
          {departments.map((d, idx) => (
            <button
              key={d.name}
              className={`main-tab${activeDeptIdx === idx ? " active" : ""}`}
              onClick={() => handleDeptChange(idx)}
              type="button"
            >
              {d.name}
            </button>
          ))}
        </div>
        {/* Sub Tabs: Schools */}
        {schools.length > 0 ? (
          <div className="sub-tabs">
            {schools.map((schoolItem, idx) => (
              <button
                key={schoolItem.name}
                className={`sub-tab${activeSchoolIdx === idx ? " active" : ""}`}
                onClick={() => handleSchoolChange(idx)}
                type="button"
              >
                {schoolItem.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="no-programs">No schools found for this department.</div>
        )}
        {/* Program Tabs */}
        {programs.length > 0 ? (
          <>
            <div className="sub-tabs" style={{marginTop: 12}}>
              {programs.map((p, idx) => (
                <button
                  key={p.title}
                  className={`sub-tab${activeProgramIdx === idx ? " active" : ""}`}
                  onClick={() => handleProgramChange(idx)}
                  type="button"
                >
                  {p.title}
                </button>
              ))}
            </div>
            {/* Program Detail */}
            <DepartmentDetail program={activeProgram} />
          </>
        ) : (
          <div className="no-programs">No programs available for this school.</div>
        )}
      </div>
    </section>
  );
}
