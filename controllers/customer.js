const Customer = require('../models/customer');
const Membership = require('../models/membership');

const addCustomer = async (req, res) => {
  try {
    const data = req.body;
    const added = await new Customer(data).save();
    res.status(200).send({
      message: 'Customer added successfully',
    });

  } catch (error) {
    console.error('Error in adding customer.', error);

  }
};

const editCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNumber,status,membershipID } = req.body;
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ status: false, message: "Customer ID is required" });
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { firstName, lastName, email, contactNumber,status,membershipID },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).send({ status: false, message: "Customer not found" });
    }
    res.send({ status: true, message: "Customer updated", data: updatedCustomer });
  } catch (error) {
    console.error("Error updating customer:", error);
    res.status(500).send({ status: false, message: "Error updating customer" });
  }
};


const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate("membershipID");
    res.send({
      status: true,
      message: 'Customer retrieved successfully',
      data: customers
    });
  } catch (error) {
    console.error('Error fetching customers:', error);
  }
}

const deleteCustomer = async (req, res) => {
  try {
    const locationId = req.params.id;
    const deletedCustomer = await Customer.findOneAndDelete({ _id: locationId },
    );
    if (!deletedCustomer) {
      return res.status(404).json({
        status: false,
        message: 'customer not found',
      });
    }

    res.status(200).json({
      status: true,
      message: 'customer deleted',
      data: deletedCustomer,
    });
  } catch (error) {
    console.error('Error deleting location:', error);
    res.status(500).json({
      status: false,
      message: 'Internal server error',
    });
  }
};


const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.send({
      status: true,
      message: 'Memberships retrieved successfully',
      data: memberships
    });
  } catch (error) {
    console.error('Error fetching Memberships:', error);
  }
}

module.exports = {
  editCustomer,
  deleteCustomer,
  addCustomer,
  getCustomers,
  getMemberships
  
};
