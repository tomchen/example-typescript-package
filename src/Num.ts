export class Num {
  value: number

  constructor(n: number) {
    this.value = n
  }

  val(): number {
    return this.value
  }

  add(n2: Num): Num {
    this.value += n2.val()
    return this
  }

  toString(): string {
    return this.val().toString()
  }

  static addAll(numArr: Array<Num>): Num {
    return new Num(numArr.map((n) => n.val()).reduce((a, b) => a + b, 0))
  }
}
