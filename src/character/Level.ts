class Level {
  constructor(private _level: number = 1, private _experience: number = 0) {}

  get level(): number {
    return this._level;
  }

  get experience(): number {
    return this._experience;
  }

  addExperience(experience: number) {
    const remainingExp = this.remainingExp();

    if (experience >= remainingExp) {
      this._level++;
      this._experience = experience - remainingExp;
    } else {
      this._experience += experience;
    }

    if (this._experience >= this.currentExpThreshold()) {
      this.addExperience(0);
    }
  }

  remainingExp() {
    return this.currentExpThreshold() - this._experience;
  }

  currentExpThreshold() {
    return this.level * 10;
  }
}

export default Level;
