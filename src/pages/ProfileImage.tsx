import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  image?: string;
  name?: string;
  id?: string;
}

const ProfileImage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state || {}) as LocationState;
  const image = state.image;
  const name = state.name || "Profile";

  const handleClick = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/", { replace: true });
  };

  useEffect(() => {
    document.title = `${name} Image • Dreazie`;
    const meta = document.querySelector('meta[name="description"]');
    const desc = `${name} profile image on Dreazie.`;
    if (meta) meta.setAttribute('content', desc);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = desc;
      document.head.appendChild(m);
    }
  }, [name]);

  useEffect(() => {
    if (!image) {
      navigate("/", { replace: true });
    }
  }, [image, navigate]);

  if (!image) return null;

  return (
    <main className="min-h-screen w-full" onClick={handleClick}>
      <h1 className="sr-only">Profile Image</h1>
      <img
        src={image}
        alt={`${name} profile image - Dreazie`}
        className="h-screen w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
    </main>
  );
};

export default ProfileImage;
