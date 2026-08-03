// =============================================================================
// Staff
// =============================================================================

export type StaffRole =
  | "Owner"
  | "Senior Admin"
  | "Admin"
  | "Trial Admin"
  | "Mod"
  | "Server Dev"
  | "Discord Dev"
  | "Events Team";

export type StaffStatus =
  | "Online"
  | "Offline"
  | "Away"
  | "Suspended";

export interface StaffMember {
  /**
   * Internal unique identifier.
   */
  id: string;

  /**
   * Discord user ID.
   */
  discordId: string;

  /**
   * Discord username.
   */
  username: string;

  /**
   * Display name shown throughout Sentinel.
   */
  displayName: string;

  /**
   * Optional avatar URL.
   */
  avatar?: string;

  /**
   * Staff role.
   */
  role: StaffRole;

  /**
   * Current staff status.
   */
  status: StaffStatus;

  /**
   * Date they joined the team.
   */
  joinedAt: string;

  /**
   * Last activity timestamp.
   */
  lastSeen: string;

  /**
   * Whether this account is currently active.
   */
  active: boolean;
}