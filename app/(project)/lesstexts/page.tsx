"use client";

import ProjectPageLayout from "../../../components/ProjectPageLayout";
import { projects } from "../../../constants";

const Page = () => {
  return <ProjectPageLayout project={projects[1]} />;
};

export default Page;
