import { MdStar } from 'react-icons/md';

export default {
  name: 'spotlight',
  title: 'Featured',
  type: 'document',
  icon: MdStar,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'blogs',
      title: 'Featured',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every entry should be unique').unique(),
        Rule.required().error('At least one entry is required'),
      ],
    },
    {
      name: 'category',
      title: 'Top Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
  ],
};
