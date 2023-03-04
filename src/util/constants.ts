export const defaultScheduleList = [{
  seg: { name: "segunda-feira", subs: []},
  ter: { name: "terça-feira", subs: [] },
  quar: { name: "quarta-feira", subs: [] },
  qui: { name: "quinta-feira", subs: [] },
  sex: { name: "sexta-feira", subs: [] },
  sab: { name: "sábado", subs: [] },
}];

export const defaultSchedule = {
  seg: { name: "segunda-feira", subs: Array(8).fill(null) },
  ter: { name: "terça-feira", subs: Array(8).fill(null) },
  quar: { name: "quarta-feira", subs: Array(8).fill(null) },
  qui: { name: "quinta-feira", subs: Array(8).fill(null) },
  sex: { name: "sexta-feira", subs: Array(8).fill(null) },
  sab: { name: "sábado", subs: Array(8).fill(null) },
};
