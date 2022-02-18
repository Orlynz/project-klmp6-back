import School from "../models/schoolModel.js";

export const getAllSchool = async (req, res) => {
  try {
    const schools = await School.findAll();
    res.json(schools);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSchoolById = async (req, res) => {
  try {
    const school = await School.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(school[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createSchool = async (req, res) => {
  try {
    await School.create(req.body);
    res.json({
      message: "School Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateSchool = async (req, res) => {
  try {
    await School.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "School Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteSchool = async (req, res) => {
  try {
    await School.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "School Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
