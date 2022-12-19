const Category = require("../models/categoryModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncError");

//Create new category Admin
exports.newCategory = catchAsyncErrors(async (req, res, next) => {
  const { categoryName, products } = req.body;
  const category = await Category.create({
    categoryName,
    products,
  });
  res.status(201).json({
    success: true,
    category,
  });
});

//Get all categories
exports.getAllCategories = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    success: true,
    categories,
  });
});



//Get single category
exports.getSingleCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorHander("Category not found", 404));
  }
  res.status(200).json({ success: true, category });
});

//Update category (Admin)
exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
  const newCategoryData = {
    categoryName: req.body.categoryName,
  };

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    newCategoryData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

//Delete a category (Admin)
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(
      new ErrorHander(`Category does not exist with Id: ${req.params.id}`, 400)
    );
  }
  await category.remove();

  res.status(200).json({
    success: true,
    message: "Category deleted successfully",
  });
});
