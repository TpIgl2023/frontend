import React from "react";
import ModEditForm from "../../components/ModEditForm";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ModifyAdmin() {
  const { mod } = useParams();
  const modValues = JSON.parse(mod);

  // const [mod, setMod] = useState({});
  return (
    <div className="relative w-full  ">
      <ModEditForm modValues={modValues} />
    </div>
  );
}
