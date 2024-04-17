'use client';

import { GroupViewScreen } from "@/screens/groupView";


export default function Group({ params }: { params: { id: number } }) {
  return (
    <>
      <GroupViewScreen id={params.id}/>
    </>
  );
}
