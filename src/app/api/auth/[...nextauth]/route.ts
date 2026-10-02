import { handlers } from '@/auth';

/**
 * Auth.js catch-all route. Lives in the marketing app because that app owns the
 * browser origin, so the session cookie is shared with everything proxied under
 * it (currently `/dashboard`).
 */
export const { GET, POST } = handlers;
