type PaymentPlan = {
  id: number;
  price: string;
  installmentYears: number;
  downPayment: string;
};

const PaymentPlans = ({ paymentPlans }: { paymentPlans: PaymentPlan[] }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4 text-[var(--primary-color)] dark:text-[#b39550]">
        Available Payment Plans
      </h2>
      <div className="flex flex-wrap gap-2">
        {paymentPlans.map((plan) => (
          <div
            key={plan.id}
            className="border rounded-lg p-4 shadow-md flex flex-col items-center dark:bg-gray-700 px-6 py-12 space-y-2"
          >
            <p className="text-[var(--primary-color)] dark:text-[#b39550] font-bold">
              {plan.price}
            </p>
            <p>
              Installment Years:{" "}
              <strong className="text-[var(--primary-color)] dark:text-[#b39550]">
                {plan.installmentYears}
              </strong>
            </p>
            <p>
              Down Payment:{" "}
              <strong className="text-[var(--primary-color)] dark:text-[#b39550]">
                {plan.downPayment}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlans;
