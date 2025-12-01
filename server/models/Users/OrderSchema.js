import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    flatno: String,
    pincode: String,
    city: String,
    state: String,

    totalamount: String,

    // Relations
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },


    BookingDate: { type: Date, default: Date.now },

    Delivery: {
      type: Date,
      default: () => {
        let d = new Date();
        d.setDate(d.getDate() + 7);
        return d;
      },
    },
  },
  { timestamps: true }
);

const OrderModel =
  mongoose.models.MyOrder || mongoose.model("MyOrder", OrderSchema);

export default OrderModel;


// MyOrder.find().populate("bookId userId sellerId");
