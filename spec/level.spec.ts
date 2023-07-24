import Level from "@character/Level";

describe("level tests", () => {
  let level: Level;
  beforeEach(() => {
    level = new Level();
  });
  it("should create lvl with correct default values", () => {
    expect(level.experience).toEqual(0);
    expect(level.level).toEqual(1);
  });
  it("shouldnt level up", () => {
    level.addExperience(8);
    expect(level.experience).toEqual(8);
    expect(level.level).toEqual(1);
  });
  it("should lvl up and exp equal to 0", () => {
    level.addExperience(10);
    expect(level.experience).toEqual(0);
    expect(level.level).toEqual(2);
  });
  it("should lvl up and exp equal 5", () => {
    level.addExperience(15);
    expect(level.experience).toEqual(5);
    expect(level.level).toEqual(2);
  });
  it("should lvl up multiple times and exp equal 1", () => {
    level.addExperience(31);
    expect(level.level).toEqual(3);
    expect(level.experience).toEqual(1);
  });
});
