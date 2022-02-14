import { iam } from '@multi-nextjs/common/lib/iam';

export default function Iam() {
  return <h2>{iam('site0')}</h2>;
}
