class PaymentProcessor {
  processPayment(amount) {
    console.log(`Pagamento de R$${amount} processado pelo sistema interno.`);
  }
}


class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}


class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}


class ModernPaymentAdapter extends PaymentProcessor {
  constructor(modernAPI) {
    super();
    this.modernAPI = modernAPI;
  }

  processPayment(amount) {
  
    const amountInCents = amount * 100;
    this.modernAPI.process(amountInCents);
  }
}


function payOrder(processor, amount) {
  processor.processPayment(amount);
}


const internalProcessor = new PaymentProcessor();
payOrder(internalProcessor, 100);


const legacy = new LegacyPaymentSystem();
legacy.processPayment = legacy.makePayment.bind(legacy);
payOrder(legacy, 150);


const modernAPI = new ModernPaymentAPI();
const adaptedModern = new ModernPaymentAdapter(modernAPI);
payOrder(adaptedModern, 200);

