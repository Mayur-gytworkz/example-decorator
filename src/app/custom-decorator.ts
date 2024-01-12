export function BonusAndHRAIncrement(bonusPercent: number, hraPercent: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const salary = originalMethod.apply(this, args);

      if (isNaN(salary)) {
        throw new Error('Invalid salary. Original method should return a valid number.');
      }

      if (bonusPercent < 0 || hraPercent < 0) {
        throw new Error('Invalid bonus and/or HRA percentages.');
      }

      const bonusAmount = bonusPercent > 0 ? salary * (Number(bonusPercent) / 100) : 0;

      const hraAmount = hraPercent > 0 ? salary * (Number(hraPercent) / 100) : 0;

      this.salary = Number(Number(salary) + Number(bonusAmount) + Number(hraAmount)).toFixed(2);

      return this.salary;
    };

    return descriptor;
  };
}
