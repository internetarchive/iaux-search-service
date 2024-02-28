export interface SearchResponseSessionContext {
  username: string;
  authentication_method: string;
  is_system: boolean;
  is_guest: boolean;
  is_user: boolean;
  is_archive_user: boolean;
  is_qualified: boolean;
  has_universal_privs: boolean;
  has_allowed_host_priv: boolean;
  has_scan_center_priv: boolean;
  has_any_priv: boolean;
  pps: {
    is_page_target_owner: boolean;
    full_text_search_override: boolean;
  }
}
