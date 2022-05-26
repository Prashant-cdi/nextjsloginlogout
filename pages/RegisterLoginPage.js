import Link from "next/link";
export default function RegisterLoginPage() {
  return (
    <div className="buttonsdiv">
      <Link href="/signup">
        <button type="button" className="buttons">
          Register
        </button>
      </Link>

      <Link href="/login">
        <button type="button" className="buttons">
          Login
        </button>
      </Link>
    </div>
  );
}
