class Mokoko {
  members = [
    { name: "원진", comapny: "핏펫" },
    { name: "용민", comapny: "액션파워" },
    { name: "상규", comapny: "틴고랜드" },
    { name: "은지", comapny: "핏펫" },
    { name: "수비", comapny: "틴고랜드" },
  ];

  getMembers() {
    console.log(this.members);
  }
  appendMember(name, company) {
    this.members.push({ name: name, comapny: company });
  }

  deleteMember(personName) {
    const newMembers = this.members.filter((member) => {
      return member.name !== personName;
    });

    this.members = newMembers;
  }

  anotherWorld(id, dream) {
    const newMembers = this.members.map((member) => {
      if (member.name === id) {
        return {
          name: member.name,
          comapny: dream,
        };
      } else {
        return member;
      }
    });

    this.members = newMembers;
  }
}

class Developer extends Mokoko {
  anotherWorld(id, dream) {
    const newMembers = this.members.map((member) => {
      if (member.name === id) {
        return {
          name: member.name,
          comapny: dream,
        };
      } else {
        return member;
      }
    });

    this.members = newMembers;
  }
}

/**
 * Q1. 원진이는 당근마켓이 가고 싶어요. 코드로라도 보내주세요
 */

const anotherWorld = new Developer();
anotherWorld.anotherWorld("원진", "당근마켓");
anotherWorld.getMembers();
