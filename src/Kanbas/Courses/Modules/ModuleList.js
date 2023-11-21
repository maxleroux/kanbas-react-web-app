import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  return (
    <ul className="list-group">
      <li className="list-group-item" style={{border: "none"}}>
        <div className="row">
        <div className="col-auto">
        <button
          onClick={handleAddModule}
          className="btn btn-primary" style={{width: 60, padding: 4}}>
          Add
        </button>
        &nbsp;
        <button
          onClick={() => dispatch(updateModule(module))}
          className="btn btn-success" style={{width: 70, padding: 4}}>
          Update
        </button>
        </div>
        &nbsp;
        <div className="col-auto">
        <input value={module.name} className="form-control" style={{width: 300}}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        </div>
        &nbsp;
        <div className="col-auto">
        <textarea value={module.description} className="form-control" style={{width: 300, height: 30}}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        </div>
        </div>
      </li>

      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div className="row header" style={{marginLeft:0, paddingTop:10, paddingBottom:10, width: "100%"}}>
                <div className="col-9" style={{marginLeft: 10}}>
                  <h4>{module.name}</h4>
                </div>
                <div className="col float-end" style={{padding: 0}}>
                  <button style={{fontSize: "15px", width: 60, padding: 4}}
                    onClick={() => handleDeleteModule(module._id)}
                    className="btn btn-danger">
                    Delete
                  </button>
                  &nbsp;
                  <button style={{fontSize: "15px", width: 60, padding: 4}}
                    onClick={() => dispatch(setModule(module))}
                    className="btn btn-success">
                    Edit
                  </button>
                </div>
              </div>
              <div className="row" style={{margin: 0}}>
                <p>{module.description}</p>
                </div>
            </li>
          ))
      }
    </ul>
  );
}
export default ModuleList;