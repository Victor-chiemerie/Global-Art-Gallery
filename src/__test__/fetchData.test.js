test('return an object', () => {
    const dat = [{
      '2022-09-24': {
        Name: 'Declaration of independence',
        Location: 'China',
        Type: 'Sculpture',
      },
    }];
    const data = dat.map((dat, val) => {
      const sdata = Object.entries(dat);
      const obj = {
        date: sdata[0][0],
        ...sdata[0][1],
        id: val,
      };
      return obj;
    });
    expect(data).toEqual([{
      date: '2022-09-24', Location: 'China', Type: 'Sculpture', Name: 'Declaration of independence', id: 0,
    }]);
  });