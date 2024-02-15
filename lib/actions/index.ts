type InvalidField = {
  path: string;
  message: string;
};

export const parseError = (json: any) => {
  if (!json.zod || json.zod.name !== "ZodError") return [];

  console.log("json", json);

  const invalidFields: InvalidField[] = [];
  for (const issue of json.zod.issues) {
    invalidFields.push({
      path: issue.path[0],
      message: issue.message,
    });
  }

  return invalidFields;
};
