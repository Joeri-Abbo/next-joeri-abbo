import type { NextApiRequest, NextApiResponse } from 'next'
import ProjectsData from "./../../data/projects.json"


type Project = {
  image: string,
  title: string,
  website_url: string,
  description: string,
  tags?: any,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<[Project]>
) {
  // @ts-ignore
  res.status(200).json(ProjectsData);
}
