import test from 'ava';
import {
  IntegrityConstraintViolationError,
  StatementCancelledError,
} from '../../src';

test('IntegrityConstraintViolationError default message', (t) => {
  t.is(
    new IntegrityConstraintViolationError(new Error('original error message'), 'test-constraint').message,
    'Query violates an integrity constraint: original error message',
  );
});

test('StatementCancelledError default message', (t) => {
  t.is(
    new StatementCancelledError(new Error('original error message')).message,
    'StatementCancelledError: original error message',
  );
});
