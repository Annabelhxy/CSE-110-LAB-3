export enum Label {
    other = 'Other',
    personal = 'Personal',
    work = 'Work',
    study = 'Study',
}

export const dummyNotesList = [
    {
        id: 1,
        title: "test note 1 title",
        content: "test note 1 content",
        label: Label.other,
        liked: true,
    },
    {
        id: 2,
        title: "test note 2 title",
        content: "test note 2 content",
        label: Label.personal,
        liked: true,
   },
   {
       id: 3,
       title: "test note 3 title",
       content: "test note 3 content",
       label: Label.work,
       liked: true,
   },
   {
       id: 4,
       title: "test note 4 title",
       content: "test note 4 content",
       label: Label.study,
       liked: true,
   },
   {
       id: 5,
       title: "test note 5 title",
       content: "test note 5 content",
       label: Label.study,
       liked: true,
   },
   {
       id: 6,
       title: "test note 6 title",
       content: "test note 6 content",
       label: Label.personal,
       liked: true,
   },
]
