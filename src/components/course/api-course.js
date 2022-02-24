import config from "../../config/config";

const create = async (params, credentials, course) => {
  try {
    let response = await fetch(
      `${config.apiHost}/api/courses/by/${params.userId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + credentials.t,
        },
        body: course,
      }
    );

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listByInstructor = async (params, credentials, signal) => {
  try {
    let response = await fetch(
      `${config.apiHost}/api/courses/by/${params.userId}`,
      {
        method: "GET",
        signal: signal,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + credentials.t,
        },
      }
    );

    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const read = async (params, signal) => {
  try {
    let response = await fetch(
      `${config.apiHost}/api/courses/${params.courseId}`,
      {
        method: "GET",
        signal: signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("no error till here");
    // const j = response.json()
    // constconsole.log(j)
    //  console.log(response.json())
    return response.json();
  } catch (err) {
    console.log("error occured here");
    console.log(err);
  }
};

const newLesson = async (params, credentials, lesson) => {
  try {
    console.log("lesson below");
    console.log(lesson);
    let response = await fetch(
      `${config.apiHost}/api/courses/${params.courseId}/lesson/new`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${credentials.t}`,
        },
        body: JSON.stringify(lesson),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (params, credentials, course) => {
  try {
    let response = await fetch(
      `${config.apiHost}/api/courses/${params.courseId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + credentials.t,
        },
        body: course,
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (params, credentials) => {
  try {
    let response = await fetch(
      `${config.apiHost}/api/courses/${params.courseId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${credentials.t}`,
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listPublished = async (signal) => {
  try {
    let response = await fetch(`${config.apiHost}/api/courses/published`, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  create,
  listByInstructor,
  read,
  newLesson,
  update,
  remove,
  listPublished,
};
